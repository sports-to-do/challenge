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
    resp.redirect('/notes');
};

notesCtrl.renderNotes = async (req, resp) => {
   const notes =  await Note.find().lean();
   resp.render('notes/all-notes',{ notes });
};

notesCtrl.renderEditForm = (req, resp) => {
    resp.render('notes/edit-note');
};

notesCtrl.updateNote = (req, resp) => {
    resp.send('update note');
};

notesCtrl.deleteNote = async (req, resp) => {
  await Note.findByIdAndDelete(req.params.id);
  //req.flash('success_msg','Note Delete Successfully');
  resp.redirect('/notes');
};

module.exports = notesCtrl;