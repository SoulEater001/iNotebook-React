import React, { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {
    const notesInitial =
        [
            {
                "_id": "6756eb4051603efa9d547a35",
                "user": "6756dd6d9dca2ac149b1f881",
                "title": "myTitle",
                "description": "myDescription",
                "tag": "personal",
                "date": "2024-12-09T13:06:08.263Z",
                "__v": 0
            },
            {
                "_id": "6756eb4151603efa9d547a37",
                "user": "6756dd6d9dca2ac149b1f881",
                "title": "myTitle",
                "description": "myDescription",
                "tag": "personal",
                "date": "2024-12-09T13:06:09.016Z",
                "__v": 0
            },
            {
                "_id": "6756eb4151603efa9d547a39",
                "user": "6756dd6d9dca2ac149b1f881",
                "title": "myTitle",
                "description": "myDescription",
                "tag": "personal",
                "date": "2024-12-09T13:06:09.199Z",
                "__v": 0
            },
            {
                "_id": "6756eb4151603efa9d547a3b",
                "user": "6756dd6d9dca2ac149b1f881",
                "title": "myTitle",
                "description": "myDescription",
                "tag": "personal",
                "date": "2024-12-09T13:06:09.382Z",
                "__v": 0
            },
            {
                "_id": "6756eb4151603efa9d547a3d",
                "user": "6756dd6d9dca2ac149b1f881",
                "title": "myTitle",
                "description": "myDescription",
                "tag": "personal",
                "date": "2024-12-09T13:06:09.687Z",
                "__v": 0
            },
            {
                "_id": "6756eb4151603efa9d547a3f",
                "user": "6756dd6d9dca2ac149b1f881",
                "title": "myTitle",
                "description": "myDescription",
                "tag": "personal",
                "date": "2024-12-09T13:06:09.855Z",
                "__v": 0
            }
        ]

    const [notes, setNotes] = useState(notesInitial);

    //Add a note
    const addNote = (title, description, tag) => {
        console.log("Adding a note")
        const note = {
            "_id": "6756eb4151603efa9d547a3f",
            "user": "6756dd6d9dca2ac149b1f881",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-12-09T13:06:09.855Z",
            "__v": 0
        };
        setNotes(notes.concat(note));
    }
    //Delete a note
    const deleteNote = () => {

    }

    //Edit a note
    const editNote = () => {

    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
