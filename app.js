// console.log('Starting app....');

const fs=require('fs');
const _=require('lodash');
const yargs=require('yargs');
const notes=require('./notes.js');

// console.log(process.argv);
var titleOptions={
  description: 'Title of note',
  demand:true,
  alias: 't'
};
var bodyOptions={
  description: 'Body of the note',
  demand: true,
  alias:'b'
};
const argv=yargs
.command('add','add some note', {
  title:titleOptions,
  body:bodyOptions
})
.command('list','Listing notes')
.command('read','Reading a note',{
  title:titleOptions
})
.command('remove','Removing a note',{
  title:titleOptions
})
.help()
.argv;
var pargv=process.argv;
// var command=process.argv[2];
var command=argv._[0];

// console.log('Process:'+pargv);
// console.log('Yargs:'+argv);
// console.log('Command: '+command);
if(command ==='add')
{
  // console.log('Adding a node');
  var note=notes.addNote(argv.title, argv.body);
  if(note)
  {
    console.log("Node added successfully!");
    notes.printNotes(note);
  }
  else {
    console.log("Node already exists");
  }
}
else if(command ==='list')
{
  // console.log('Listing all nodes');
  var allnotes=notes.getAll();
  console.log('Printing '+allnotes.length+' note(s)');
  allnotes.forEach((note) =>{
    notes.printNotes(note);
  });
}
else if(command ==='remove')
{
  // console.log('Removing node');
  var noteRemoved=notes.removeNote(argv.title);
  var message=noteRemoved ? 'Note removed successfully' : 'Note not found';
  console.log(message);

}
else if(command ==='read')
{
  // console.log('Reading nodes');
var note=  notes.readNote(argv.title);
if(note)
{
  console.log('Note found!');
    notes.printNotes(note);
}
else {
  console.log('Node not found');
}

}
else {
    console.log('Command not found...');
  }


// console.log(_.isString(true));
// console.log(_.isString('Simran'));
//
// var filArray=_.uniq(['simran',2,4,4,5,'nalini','simran',7,8]);
// console.log(filArray);

// fs.appendFile('greetings.txt','Data being appended....', fuction (err) {
//   if (err)
//   {
//     console.log('Unable to write to file!');
//   }
// });

// var user=os.userInfo();
//console.log(user);
// fs.appendFileSync('greetings.txt','Hello'+user.username+'! Your age is '+notes.age);

// var res=notes.addNote();
// console.log(res);
//
// var s=notes.add(52, 56);
// console.log(s);
