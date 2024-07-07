import React, { useEffect, useState} from 'react';
import NoteItem from './NoteItem';


function NoteList() {

    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchNotes() {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:3000/api/notes');
                if (!response.ok) {
                    throw new Error("Network response was not ok, NoteList.jsx: 14")
                }
                const data = await response.json();
                setNotes(data);
                setError(null)
            } catch (error) {
                setError("Failed to fetch notes")
                console.log("Failed to fetch notes: ", error);
            }
            setLoading(false);
        }
        fetchNotes();
    }, []);

    function handleEdit(note) {
        console.log("Editing Note: ", note);
        // implementation needed
    }
    function handleDelete(noteID) {
        console.log("Deleting Note: ", noteID);
        // implementation needed
    }
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error Loading Notes: {error}</p>
    return (
        <div>
            <h2>Notes</h2>
            <ul>
                {notes.map(note => {
                    <NoteItem key={note._id} note={note} onEdit={handleEdit} onDelete={handleDelete} />
                })}
            </ul>
        </div>
    );
}

export default NoteList;