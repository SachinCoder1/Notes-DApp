import React, { useEffect, useState } from "react";
import { CONTRACT_ADDRESS } from "../config/config";
import NotesABI from "../utils/Notes.json";
import { ethers } from "ethers";
import Card from "./subcomponents/cards/Card";

export default function GetNotesMain({ currentAccount }) {
  const [notes, setNotes] = useState();
  const getAllNotes = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = await new ethers.providers.Web3Provider(ethereum);
        const signer = await provider.getSigner();
        const NotesContract = await new ethers.Contract(
          CONTRACT_ADDRESS,
          NotesABI.abi,
          signer
        );

        let allNotes = await NotesContract.getNotes();
        setNotes(allNotes);
      } else {
        console.log("Notes Not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      if (currentAccount) {
        await getAllNotes();
      }
    };
    getData();
  }, []);


  const getTime= (time) => {
    const convertTime = new Date(time * 1000).toLocaleString({timeZone: 'Asia/Kolkata'});
    return convertTime.slice(convertTime.length-10);
  }
  const getDate= (time) => {
    let convertTime = new Date(time * 1000).toLocaleString({timeZone: 'Asia/Kolkata'});
    if(convertTime.charAt(0) <= 9){
        convertTime = "0"+convertTime;
    }
    return convertTime.slice(0,10);
  }

  return (
    <div className="grid grid-cols-3 gap-5 px-5">
        {notes ? notes.map((item) => (
          <Card title={item.title} description={item.description} time={getTime(item.createdAt)} date={getDate(item.createdAt)} />
        )): <p>0 Notes Found</p>}
    </div>
  );
}
