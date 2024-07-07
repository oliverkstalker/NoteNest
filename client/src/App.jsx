import { useEffect, useState } from 'react';
import './App.css';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // API call to fetch notes
    fetch('http://localhost:3000/api/notes').then(response => response.json()).then(setNotes);
  }, []);
  const handleAddNote = async (note) => {
    // API call to save the note
    const response = await fetch('http://localhost:3000/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    });
    const newNote = await response.json();
    if (response.ok) {
      console.log('Note added successfully');
      setNotes([...notes, newNote]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Notetaking App</h1>
      </header>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList />
    </div>
  );
}

export default App;
