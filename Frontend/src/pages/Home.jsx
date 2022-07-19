import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AddNoteMain from "../components/AddNoteMain";
import GetNotesMain from "../components/GetNotesMain";
// import TSParticles from "../components/TSParticles";
// IF you want animations then just comment out TSParticles at line number 9 and 31;


export default function Home() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [correctNetwork, setCorrectNetwork] = useState(false);
  const [isWeb3Enabled, setisWeb3Enabled] = useState(false);
  const [notes, setNotes] = useState([]);




  return (
    <div className="bg-transparent z-10">
      <Navbar
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
        correctNetwork={correctNetwork}
        setCorrectNetwork={setCorrectNetwork}
        isWeb3Enabled={isWeb3Enabled}
        setisWeb3Enabled={setisWeb3Enabled}
      />
      {/* <TSParticles />  */}
      {currentAccount ? (
        <>
          <div className="relative z-50 ">
            <AddNoteMain notes={notes} setNotes={setNotes} />
            <GetNotesMain currentAccount={currentAccount} />
          </div>
        </>
      ) : <p className="text-center text-md font-semibold py-1">Connect your wallet to continue. </p>}
    </div>
  );
}
