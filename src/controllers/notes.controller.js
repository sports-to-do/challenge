const eventCtrl = {};

// Models
const Event = require('../models/Note');

eventCtrl.renderNoteForm = (req, res) => {
  res.render('notes/new-note');
};

eventCtrl.createNewNote = async (req, res) => {
  const { title, description } = req.body;
  const errors = [];
  if (!title) {
    errors.push({ text: 'Please Write a Title.' });
  }
  if (!description) {
    errors.push({ text: 'Please Write a Description' });
  }
  if (errors.length > 0) {
    res.render('notes/new-note', {
      errors,
      title,
      description,
    });
  } else {
    const newNote = new Event({ title, description });
    newNote.user = req.user.id;
    await newNote.save();
    req.flash('success_msg', 'Event Added Successfully');
    res.redirect('/notes');
  }
};



eventCtrl.renderAllEvents = async (req, res) => {
  const notes = await Event.find({ user: req.user.id })
    .sort({ date: 'desc' })
    .lean();
  res.render('notes/all-notes', { notes });
};

eventCtrl.renderNotes =(req, res) =>{
  res.send('all events without security ');
};

eventCtrl.renderEditForm = async (req, res) => {
  const note = await Event.findById(req.params.id).lean();
  if (note.user != req.user.id) {
    req.flash('error_msg', 'Not Authorized');
    return res.redirect('/notes');
  }
  res.render('notes/edit-note', { note });
};

eventCtrl.updateNote = async (req, res) => {
  const { title, description } = req.body;
  await Event.findByIdAndUpdate(req.params.id, { title, description });
  req.flash('success_msg', 'Event Updated Successfully');
  res.redirect('/notes');
};

eventCtrl.deleteNote = async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  req.flash('success_msg', 'Event Deleted Successfully');
  res.redirect('/notes');
};

module.exports = eventCtrl;
