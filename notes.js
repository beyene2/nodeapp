
const fs = require("fs");


var fetchNotes = () =>{
    try{
        var noteString=fs.readFileSync("notes-data.json");
        return JSON.parse(noteString);
    }catch(e){
        return [];
    }
};

var saveNotes = (notes)=>{
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var addNote = (title,body) => {
var notes = fetchNotes();
var note = {
    title,
    body
};

var duplicateNotes = notes.filter((note) => note.title === title);

if(duplicateNotes.length===0){
    notes.push(note);
    saveNotes(notes);
    console.log(note.title + " Just created");
    return note;
    
}else{
    console.log(note.title +"  alrady exists");
}

};

var getAll=()=>{
    console.log("Getting all notes");
}

var removeNote = (title) =>{
        // fetchNotes
    var notes = fetchNotes();
    // filter note, remove the one that matches
    var filterNotes=notes.filter((note) => note.title !== title);
    // save new notes array
    saveNotes(filterNotes);
    return notes.length!==filterNotes.length;
}

var readNote = (title) =>{
    console.log("Reading notes", title);
}
module.exports={
    addNote,
    getAll,
    removeNote,
    readNote
};