import React from 'react';



function NoteItem({ note, onEdit, onDelete }) {
    return (
        <li>
            <h3>{note.title}</h3>
            <button onClick={() => onEdit(note)}>Edit</button>
            <button onClick={() => onDelete(note)}>Delete</button>
        </li>
    );
}

export default NoteItem;