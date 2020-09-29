const { Router } = require('express');
const router = Router();

const {renderNoteForm ,createNewNote, renderNotes }= require('../controllers/notes.controller');

router.get('/notes/add',renderNoteForm);
router.post('/nodes/add',createNewNote);

router.get('/notes', renderNotes);

//Edit notes
router.get('/notes/edit/:id');

module.exports = router;