const { assert, expect } = require("chai");
const { network, getNamedAccounts, deployments, ethers } = require("hardhat");
const {
  developmentChains,
  networkConfig,
} = require("../../helper-hardhat-config");

if (!developmentChains.includes(network.name)) {
  describe.skip;
} else {
  let NotesContract, deployer, TOTAL_TASKS, totalNotes;

  let dummyNote = {
    isDeleted: false,
    _title: "This is the title",
    _description: "this is a description",
  };
  beforeEach(async () => {
    TOTAL_TASKS = 5;
    totalNotes = [];
    deployer = (await getNamedAccounts()).deployer;
    NotesContract = await ethers.getContract("Notes", deployer);

    for (let index = 0; index < TOTAL_TASKS.length; index++) {
      await NotesContract.addNote(
        dummyNote.isDeleted,
        dummyNote._title,
        dummyNote._description
      );
      totalNotes.push(dummyNote);
    }
  });


//   After before each


describe('Notes Smart Contract Test', () => { 
    it("Emits on Adding Notes", async () => {
        await expect(await NotesContract.addNote(dummyNote.isDeleted, dummyNote._title, dummyNote._description)).to.emit(NotesContract, 'AddNote').withArgs(deployer, 3);
    })

    it("Getting notes (Should return the corrent length)", async () => {
        let lengthOfGetNotesw = await NotesContract.getNotes();
        assert.equal(await lengthOfGetNotesw.length, 3);

    })

    it("Deleting notes (Should emit the DeleteNote event)", async () => {
        expect(await NotesContract.deleteNote(1, true)).to.emit(NotesContract, "DeleteNote").withArgs(1, true);
    })
 })











}
