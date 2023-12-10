import React, { useEffect, useState } from "react";
import Nav from "./components/Navbar";
import Create from "./components/CreateNote";
import Note from "./components/Note";
import EditNote from "./components/EditNote";
import Footer from "./components/Footer";

function App() {
  const [arr, setArr] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  const [editNote, setEditNote] = useState(null);

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(arr));
  }, [arr]);

  function handleAddNote(note) {
    setArr((prevNote) => {
      return [...prevNote, note];
    });
  }
  function delNote(id) {
    setArr((prevItem) => {
      return prevItem.filter((arr, index) => {
        return index !== id;
      });
    });
  }
  function newEdit(id) {
    setEditNote(id);
  }
  function saveEditedNote(id, title, content) {
    setArr((prevItems) =>
      prevItems.map((item, index) =>
        index === id ? { ...item, title: title, content: content } : item
      )
    );
    setEditNote(null);
  }

  function cancelEdit() {
    setEditNote(null);
  }
  return (
    <div>
      <Nav />
      <Create AddNote={handleAddNote} />
      <div className="flex justify-evenly flex-wrap">
        {arr.map((note, index) => (
          <React.Fragment key={index}>
            {editNote === index ? (
              <EditNote
                id={index}
                title={note.title}
                content={note.content}
                onSave={saveEditedNote}
                onCancel={cancelEdit}
              />
            ) : (
              <Note
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                del={delNote}
                edit={newEdit}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
