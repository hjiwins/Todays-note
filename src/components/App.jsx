import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Today from "./Today";

function App() {
  const [noteList, setNoteList] = useState([]);
  
  function addNote(newNote) {
    setNoteList((prevList) => {
      return [...prevList, newNote];
    });
  }

  function deleteNote(noteId) {
    setNoteList((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== noteId;
      });
    });
  }

  return (
    <div>
      <Header />
      <Today />
      <CreateArea onAdd={addNote} />
      <div className="note-wrap">
        {noteList.map((item, index) => (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={deleteNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default App;
