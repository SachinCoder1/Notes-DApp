// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;


contract Notes {

    /* State Variables */



    /* Struct */
    struct Note {
        uint noteId;
        uint createdAt;
        bool isDeleted;
        string title;
        string description;
    }

    Note[] public notes;

    /* Mappings */
    mapping(uint256 => address) public noteId; // which noteId belongs to which address or user;



    /* Events */
    event AddNote(address recipient, uint _noteId);
    event deleteNote (uint taskId, bool isDeleted);


    /* Get/Pure Functions */





    /* Logics */

    // AddNote
    function addNote(bool _isDeleted, string memory _title, string memory _description) public {
        address recipient = msg.sender;
        uint _noteId = notes.length;

        notes.push(Note(_noteId, block.timestamp, _isDeleted, _title, _description)); 
        noteId[_noteId] = recipient;

        emit AddNote(recipient, _noteId);
    }

    

    
}