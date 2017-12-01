console.log("starting app.js");

const fs=require("fs");
const os=require("os");
const _=require("lodash");
const yargs=require("yargs");

const notes=require("./notes.js")

const argv = yargs.argv;
var command =argv._[0];
console.log("Command:", command);
console.log("yargs:", argv);

if(command==="add"){
    var note = notes.addNote(argv.title, argv.body);
}else if(command==="list"){
    notes.getAll();
    
}else if(command==="read"){
    notes.readNote(argv.title);
    
}else if(command==="remove"){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "Note was removed":"Note not found ";
    console.log(message);
}else{
    console.log('command not recognized');
}
