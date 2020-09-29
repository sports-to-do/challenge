const notesCtrl ={};

notesCtrl.renderNoteForm = (req,resp)=>{
    resp.send('Notes Add');
};

notesCtrl.createNewNote = (req,resp)=>{
    resp.send('new Note');
};

notesCtrl.renderNotes = (req,resp)=>{
    resp.send('render Notes');
};


module.exports = notesCtrl;