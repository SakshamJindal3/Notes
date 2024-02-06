import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
// import Search from './components/Search';
// import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "First Note",
      text: "This is my first note!",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      title: "Second Note",
      text: "This is my second note!",
      date: "21/04/2021",
    },
    {
      id: nanoid(),
      title: "Third Note",
      text: "This is my third note!",
      date: "28/04/2021",
    },
    {
      id: nanoid(),
      title: "New Note",
      text: "This is my new note!",
      date: "30/04/2021",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/note/:noteId" component={Note} /> */}
        {/* <Route path="/note-list" component={NotesList} />*/}
        <Route
          path="/note-list"
          element={
            <NotesList
              notes={notes}
              handleAddNote={addNote}
              handleDeleteNote={deleteNote}
            />
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
