const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.renderNoteForm = (req, resp) => {
    resp.render('notes/new-note');

};

notesCtrl.createNewNote = async  (req, resp) => {
    const {title , description } = req.body;
    const newNote = new Note({ title, description});
    await  newNote.save();
    resp.send('new Note');
};

notesCtrl.renderNotes = async (req, resp) => {
   const notes =  await Note.find();
   resp.render('notes/all-notes',{ notes });
};

notesCtrl.renderEditForm = (req, resp) => {
    resp.send('render edit note');
};

notesCtrl.updateNote = (req, resp) => {
    resp.send('update note');
};

notesCtrl.deleteNote = (req, resp) => {
    resp.send('deleting note');
};

module.exports = notesCtrl;