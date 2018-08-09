// console.log('Starting notes....');
const fs=require('fs');
// module.exports.age=23;

// module.exports.addNote= () => {
//   console.log('Adding note');
//   return 'New note';
// }

// module.exports.add= ( a, b)=> {
//   return a+b;
//
// }
var fetchNotes = () => {
  try { //if file does not exist
    var noteString=fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    // console.log('An error occurred!');
    return [];
  } finally {

  }
};

var saveNotes= (notes) =>{
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));

};

var printNotes=(note) => {
  debugger;
  console.log('----');
  console.log('Title:'+note.title);
  console.log('Body:'+note.body);
};

var addNote= (title, body) => {
// console.log('Adding node: '+title+' '+body);
var notes=fetchNotes();
var note={
  title,
  body
};

var duplicateNotes=notes.filter((note=> note.title===title)); //for unique titles
if(duplicateNotes.length===0)
{
notes.push(note);
saveNotes(notes);
return note;
}
};

var getAll= () => {
// console.log('Getting all nodes');
return fetchNotes();
};

var readNote= (title) => {
// console.log('Reading node: '+title);
var notes=fetchNotes();
var matchingNotes=notes.filter((note => note.title===title));
return matchingNotes[0];
};

var removeNote= (title) => {
// console.log('Removing node: '+title);
var notes=fetchNotes();
var filteredNotes=notes.filter((note=> note.title!==title));//filtering notes that do not match..
saveNotes(filteredNotes);
if(notes.length!=filteredNotes.length)
return true;
};


module.exports= {
  addNote: addNote,
  getAll,
  readNote,
  removeNote,
  printNotes
};
