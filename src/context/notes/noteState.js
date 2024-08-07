import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialNotes = [];

  const [note, setNote] = useState(initialNotes);



  const [show, setShow] = useState(false)

  const [noteInEdit, setNoteInEdit] = useState({id: "", etitle: "", edescription: "", etag: ""})

  const updateNote =(note) => {
    setShow(true)
    setNoteInEdit({"id": note._id, "etitle": note.title, "edescription": note.description, "etag": note.tag})
  }


  // Get all notes from mongo to client
  const getNotes = async () => {
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYzk1OTQ2MDZlNzRjNjkwNmE1ZjM4In0sImlhdCI6MTcyMjU5MDY5OX0.QU6mORfsUW3a2PIPz0PbG97HxG9gP8sGJykFcepNqAk",
      },
    });
    const json = await response.json();
    setNote(json)
  };

 
  // add a note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYzk1OTQ2MDZlNzRjNjkwNmE1ZjM4In0sImlhdCI6MTcyMjU5MDY5OX0.QU6mORfsUW3a2PIPz0PbG97HxG9gP8sGJykFcepNqAk",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json()
    setNote(note.concat(json)); // we didn't use .push bcuz .push create a new array with pushed one whereas concat append pushed one in existing array

  };


  //delete a note
  const deleteNote = async(id) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYzk1OTQ2MDZlNzRjNjkwNmE1ZjM4In0sImlhdCI6MTcyMjU5MDY5OX0.QU6mORfsUW3a2PIPz0PbG97HxG9gP8sGJykFcepNqAk",
      }
    });
    const json = await response.json()
    console.log(json);

    // Logic to edit in client
    const newNote = note.filter((note) => {
      return note._id !== id;
    });
    setNote(newNote);
  };
  


  //edit a note
  const editNote = async (id, title, description, tag) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYzk1OTQ2MDZlNzRjNjkwNmE1ZjM4In0sImlhdCI6MTcyMjU5MDY5OX0.QU6mORfsUW3a2PIPz0PbG97HxG9gP8sGJykFcepNqAk",
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = await response.json();
    console.log(json);

    // Logic to edit in client
    let newNotes = JSON.parse(JSON.stringify(note))
    for (let i=0; i<newNotes.length; i++) {
      const element = newNotes[i]
      if (element._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }
    }
    setNote(newNotes)
  };

  return (
    <NoteContext.Provider value={{ note, addNote, deleteNote, editNote, getNotes, show, setShow, updateNote, noteInEdit, setNoteInEdit }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
