import React, { useState } from 'react';


function NoteForm({ onAddNote }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleContentChange = (event) => {
        setContent(event.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!title || !content) {
            alert("Both title and content are required to create a note");
            return;
        }
        const note = { title, content };
        onAddNote(note);
        setTitle('');
        setContent('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={handleTitleChange}
                />
            </div>
            <div>
                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    name="content"
                    value={content}
                    onChange={handleContentChange}
                />
            </div>
            <button type="submit">Add Note</button>
        </form>
    );
}

export default NoteForm;

