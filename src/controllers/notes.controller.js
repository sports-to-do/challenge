const notesCtrl ={};

notesCtrl.renderNoteForm = (req,resp) => {
    resp.render('notes/new-note');
};

notesCtrl.createNewNote = (req,resp) => {
    resp.send('new Note');
};

notesCtrl.renderNotes = (req,resp) => {
    resp.send('render Notes');
};

notesCtrl.renderEditForm =  (req,resp) => {
    resp.send('render edit note');
};

notesCtrl.updateNote = (req,resp) => {
    resp.send('update note');
};

notesCtrl.deleteNote = (req,resp) => {
    resp.send('deleting note');
};

module.exports = notesCtrl;