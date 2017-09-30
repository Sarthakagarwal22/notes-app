console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);

  if(note){
  	console.log("note added");
  	notes.logNote(note);
  }
  else{
  	console.log("title already taken");
  }

} 

else if (command === 'list') {
  var allnote = notes.getAll();
  if(allnote.length>0){
    allnote.forEach((note) => notes.logNote(note));
    }
  
  else{
    console.log("No Note");
  }
} 

else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if(note){
  	console.log("note Read");
  	notes.logNote(note);	
  }
  else{
  	console.log("No Note Found");	
  }
} 


else if (command === 'remove') {
  var note = notes.removeNote(argv.title);

  if(note){
  	console.log("Notes Successfully Removed");
  }
  else{
  	console.log("No note with the title found");
  }
} 

else {
  console.log('Command not recognized');
}
