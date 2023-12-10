import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notenebula-notes'));
    if (true) {
      setNotes(savedNotes);
    }
  }, []);

  const addNote = (text) => {
    const today = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: today.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    localStorage.setItem('notenebula-notes', JSON.stringify(newNotes));
    toast.success('Note added successfully!', {
      position: "bottom-left",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    localStorage.setItem('notenebula-notes', JSON.stringify(newNotes));
    toast.success('Note deleted successfully!', {
      position: "bottom-left",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <ToastContainer />
        <Header setDarkMode={setDarkMode} />
        <Search handleSearch={setSearchText} />
        <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))} addNote={addNote} deleteNote={deleteNote} />
      </div>
    </div>
  )
}

export default App;