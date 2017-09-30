console.log('Starting notes.js');

const fs = require('fs');

var readNotes = () =>{
  try{
    var readString = fs.readFileSync("notes-data.json");
    return JSON.parse(readString);
  } catch(e){
    return [];
  }
};

var saveNotes = (notes) =>{
  fs.writeFileSync("notes-data.json",JSON.stringify(notes));
} 

var addNote = (title, body) => {
  var notes = readNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return readNotes();
};

var getNote = (title) => {
  var notes = readNotes();
  var noteRead = notes.filter((note) => note.title === title);
  return noteRead[0];
};

var removeNote = (title) => {
  var notes = readNotes();
  var newNotes = notes.filter((note) => note.title !== title);
  saveNotes(newNotes);

  return notes.length !== newNotes.length;
};

var logNote = (note) =>{
  console.log("--");
  console.log(`title : ${note.title}`);
  console.log(`Body : ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
