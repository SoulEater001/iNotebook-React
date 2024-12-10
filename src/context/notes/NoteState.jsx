import React, { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial);
    const host = 'http://localhost:5000'

    //FetchAll Notes
    const getNotes = async () => {
        console.log("Fetching notes")
        // api call
        const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc1NmRkNmQ5ZGNhMmFjMTQ5YjFmODgxIn0sImlhdCI6MTczMzc4Mjc3OX0.uEVgxe9QpzwTX5B6ouoFh8kiwNhW_udIfFkEkc-vQQ0"
            },
        });
        const json = await response.json();
        console.log(json)
        setNotes(json);
    }

    //Add a note
    const addNote = async (title, description, tag) => {
        console.log("Adding a note")
        // api call
        const response = await fetch(`${host}/api/notes/addNote`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc1NmRkNmQ5ZGNhMmFjMTQ5YjFmODgxIn0sImlhdCI6MTczMzc4Mjc3OX0.uEVgxe9QpzwTX5B6ouoFh8kiwNhW_udIfFkEkc-vQQ0"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const note = await response.json();
        setNotes(notes.concat(note));
    }
    //Delete a note
    const deleteNote = async (id) => {
        console.log("Deleting with id" + id);
        // api call
        const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc1NmRkNmQ5ZGNhMmFjMTQ5YjFmODgxIn0sImlhdCI6MTczMzc4Mjc3OX0.uEVgxe9QpzwTX5B6ouoFh8kiwNhW_udIfFkEkc-vQQ0"
            },
        });
        const json = response.json();
        console.log(json);

        const newNotes = notes.filter((note) => {
            return note._id !== id;
        })
        setNotes(newNotes);
    }

    //Edit a note
    const editNote = async (id, title, description, tag) => {
        // api call
        const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc1NmRkNmQ5ZGNhMmFjMTQ5YjFmODgxIn0sImlhdCI6MTczMzc4Mjc3OX0.uEVgxe9QpzwTX5B6ouoFh8kiwNhW_udIfFkEkc-vQQ0"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        console.log(json);
        let newNotes = JSON.parse(JSON.stringify(notes));
        //logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        console.log(newNotes)
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
