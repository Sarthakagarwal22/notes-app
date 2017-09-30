const fs = require('fs');
var fetchNotes = () =>{
  try{
    var readString = fs.readFileSync("notes2-data.json");
    return JSON.parse(readString);
  } catch(e){
    return [];
  }
};

var writeNotes = (notes) =>{
  fs.writeFileSync("notes2-data.json",JSON.stringify(notes));
} 

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    writeNotes(notes);
    return note;
  }
};

var readNote = (title) =>{
	var notes = fetchNotes();
	var noteRead = notes.filter((note) => note.title === title);
	return noteRead[0];
};

var getAll = () =>{
	return fetchNotes();
};

var removeNote = (title) => {
	var notes = fetchNotes();
	var newNotes = notes.filter((note) => note.title !== title)
	writeNotes(newNotes);
	return newNotes.length!==notes.length;
};

var logNote = (note) =>{
	console.log("--");
	console.log(`The title of the note is ${note.title}`);
	console.log(`The body of the note is ${note.body}`);
};

module.exports = {
addNote,
readNote,
getAll,
removeNote,
logNote
};
