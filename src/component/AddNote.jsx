import React, { useContext, useState } from 'react';
import NoteContext from '../context/notes/NoteContext';

const AddNote = (props) => {
    const context = useContext(NoteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        props.showAlert("Added successfully", "success");
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <div className="container my-4">
            <div className="card shadow-sm border-0 rounded-3">
                <div className="card-body">
                    <h4 className="card-title mb-3">➕ Add a New Note</h4>
                    <form onSubmit={handleClick}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label fw-semibold">Title</label>
                            <input
                                value={note.title}
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                onChange={onChange}
                                minLength={5}
                                required
                                placeholder="Enter note title"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label fw-semibold">Description</label>
                            <textarea
                                value={note.description}
                                className="form-control"
                                id="description"
                                name="description"
                                rows="3"
                                onChange={onChange}
                                minLength={5}
                                required
                                placeholder="Write your note details..."
                            ></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tag" className="form-label fw-semibold">Tag</label>
                            <input
                                value={note.tag}
                                type="text"
                                className="form-control"
                                id="tag"
                                name="tag"
                                onChange={onChange}
                                placeholder="E.g., Personal, Work, Ideas"
                            />
                            <div className="form-text">Add a tag to categorize your note.</div>
                        </div>
                        <button
                            disabled={note.title.length < 5 || note.description.length < 5 || note.tag.length < 5}
                            type="submit"
                            className="btn btn-primary w-100"
                        >
                            Add Note
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNote;
