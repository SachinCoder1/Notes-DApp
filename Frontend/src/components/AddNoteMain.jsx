import React, { useState } from "react";
import Btn from "./subcomponents/btns/Btn";
import Input from "./subcomponents/inputs/Input";
import {ethers} from 'ethers'
import { CONTRACT_ADDRESS } from "../config/config";
import NotesABI from '../utils/Notes.json'

export default function AddNoteMain({ notes, setNotes }) {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

// Add note onClick
  const handleClick= async ()=>{

    let note = {
      'isDeleted': false,
      'title': title,
     'description': description
    };

    try {
      const {ethereum} = window

      if(ethereum) {
        const provider = await new ethers.providers.Web3Provider(ethereum);
        const signer = await provider.getSigner();
        const TaskContract = await new ethers.Contract(
            CONTRACT_ADDRESS,
            NotesABI.abi,
            signer
        )

        await TaskContract.addNote(note.isDeleted, note.title, note.description)
        .then(response => {
          setNotes([...notes, note]);
          console.log("Note added successfully", response);
        })
        .catch(err => {
          console.log("Error occured while adding a new Note", err);
        });
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch(error) {
      console.log("Error submitting new Note", error);
    }

    setTitle("");
    setDescription("")
  };









  return (
    <div className="flex justify-center items-center">
      <div className="drop-shadow-sm w-full max-w-[586px] rounded-2xl my-11">
     
      <div className="flex flex-col md:gap-2 mb-2 md:mb-4">
        <div>
          <Input
            label="Title"
            labelFor="title"
            placeholder="e.g.Do Assignment"
            type="text"
            required={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <Input
            label="Description"
            labelFor="description"
            placeholder="e.g.Course Assignment which is important"
            title="Must contain at least some words"
            required={true}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          />
        </div>
      </div>

      <Btn text="Add Note" onClick={handleClick} />
    </div>
    </div>
  );
}
