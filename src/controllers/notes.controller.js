const notesCtrl = {};

const Note = require("../models/Note");

notesCtrl.renderNoteForm = (req, resp) => {
    resp.render("notes/new-note");
};

notesCtrl.createNewNote = async (req, resp) => {
    const {
        title,
        description
    } = req.body;
    const errors = [];
    if (!title) {
        errors.push({
            text: "please write a Title",
        });
    }
    if (!description) {
        errors.push({
            text: "please write a Description",
        });
    }
    if (errors.length > 0) {
        resp.render("notes/new-note", {
            errors,
            title,
            description,
        });
    } else {
        const newNote = new Note({
            title,
            description,
        });
        await newNote.save();
        req.flash("success_msg", "Note Added Successfully");
        resp.redirect("/notes");
    }
};

notesCtrl.renderNotes = async (req, resp) => {
    const notes = await Note.find().sort({
        date: "desc"
    }).lean();
    resp.render("notes/all-notes", {
        notes,
    });
};

notesCtrl.renderEditForm = async (req, resp) => {
    const note = await Note.findById(req.params.id).lean();
    resp.render("notes/edit-note", {
        note,
    });
};

notesCtrl.updateNote = async (req, resp) => {
    const {
        title,
        description
    } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
        title,
        description,
    });
    req.flash("success_msg", "Note Updated Successfully");
    resp.redirect("/notes");
};

notesCtrl.deleteNote = async (req, resp) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash("success_msg", "Note Delete Successfully");
    resp.redirect("/notes");
};

module.exports = notesCtrl;