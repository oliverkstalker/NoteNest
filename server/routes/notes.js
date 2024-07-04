const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

// GET all notes
router.get("/", async (req, res) => {
    try {
        const notes = await Note.find();    // built in mongoose method to return all documents in the notes collection
        res.json(notes);
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
});

// GET a specific note
router.get('/:noteId', async (req, res) => {
    try {
        const note = await Note.findById(req.params.noteId);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.json(note);
    }
    catch (err) {
        res.status(500).json({ message: err});
    }
});

// POST a new note
router.post("/", async (req, res) => {
    const note = new Note({
        title: req.body.title,
        content: req.body.content,
    });
    try {
        const savedNote = await note.save();
        res.json(savedNote);
    }
    catch (err) {
        res.status(400).json({ message: err });
    }
});

// PUT (update) a note
router.put('/:noteId', async (req, res) => {
    try {
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.noteId, 
            { $set: { title: req.body.title, content: req.body.content, updatedAt: Date.now() }},
            { new: true }
        );
        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.json(updatedNote);
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
})

// DELETE a note
router.delete('/:noteId', async (req, res) => {
    try {
        const removedNote = await Note.findByIdAndDelete(req.params.noteId);
        if (!removedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.json(removedNote);
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
})


module.exports = router;

