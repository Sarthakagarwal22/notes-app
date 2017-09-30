console.log("Starting app2.js");
const yargs = require('yargs');
const notes = require('./notes2.js');
const _ = require('lodash');

var titleObject = {
	describe : "Specify the title of the note",
	demand : true,
	alias : "t"
};

var bodyObject = {
	describe : "Specify the Body the note",
	demand : true,
	alias : "b"
};

var argv = yargs
.command("add","Add a new note to already existing ones",{
	title : titleObject,
	body : bodyObject
})
.command("read","Read an already written note",{
	title : titleObject
})
.command("list","List all the available notes",{

})
.command("Remove","Remove the note with the specified title",{
	title : titleObject
})
.help().argv;

var command = argv._[0];

if(command === "add"){
	var note = notes.addNote(argv.title,argv.body);
	if(note){
		notes.logNote(note);
	}
	else{
		console.log("Title already taken");
	}
}

else if(command === "read"){
	var note = notes.readNote(argv.title);
	if(note){
		notes.logNote(note);
	}
	else{
		console.log("Note of the specified title not found");
	}
}

else if(command === "list"){
	var allNotes = notes.getAll();
	if(allNotes.length > 0)
		allNotes.forEach((note) => notes.logNote(note));
	else
		console.log("No notes in the file");
}

else if(command === "remove"){
	var note = notes.removeNote(argv.title);
	if(note){
		console.log("Note Removed");
	}	
	else{
		console.log("Note of the specified title not found")
	}
}

else{
	console.log("Command Not Recognized")
}
