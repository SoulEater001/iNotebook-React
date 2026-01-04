import React, { useContext, useState, useEffect, useRef } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";

function NotesPage(props) {
    const navigate = useNavigate();
    const { notes, getNotes, editNote } = useContext(NoteContext);

    const [note, setNote] = useState({
        id: "",
        etitle: "",
        edescription: "",
        etag: "default",
    });

    const ref = useRef(null);
    const refClose = useRef(null);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            getNotes();
        } else {
            navigate("/login");
        }
    }, [getNotes, navigate]);

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({
            id: currentNote._id,
            etitle: currentNote.title,
            edescription: currentNote.description,
            etag: currentNote.tag || "General",
        });
    };

    const handleClick = () => {
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();
        props.showAlert("Updated successfully", "success");
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <div className="container my-4">
            <h2 className="mb-3">📒 Your Notes</h2>

            {/* Hidden trigger for modal */}
            <button
                ref={ref}
                type="button"
                className="btn btn-primary d-none"
                data-bs-toggle="modal"
                data-bs-target="#editModal"
            >
                Launch demo modal
            </button>

            {/* Edit Note Modal */}
            <div
                className="modal fade"
                id="editModal"
                tabIndex="-1"
                aria-labelledby="editModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content edit-modal-card">

                        {/* Header */}
                        <div className="modal-header edit-modal-header">
                            <h5 className="modal-title fw-semibold" id="editModalLabel">
                                ✏️ Edit Note
                            </h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        {/* Body */}
                        <div className="modal-body">
                            <form className="my-2">
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label fw-semibold">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        value={note.etitle}
                                        className="form-control enhanced-input"
                                        id="etitle"
                                        name="etitle"
                                        onChange={onChange}
                                        minLength={5}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label fw-semibold">
                                        Description
                                    </label>
                                    <textarea
                                        value={note.edescription}
                                        className="form-control enhanced-input"
                                        id="edescription"
                                        name="edescription"
                                        rows="3"
                                        onChange={onChange}
                                        minLength={5}
                                        required
                                    ></textarea>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label fw-semibold">
                                        Tag
                                    </label>
                                    <input
                                        type="text"
                                        value={note.etag}
                                        className="form-control enhanced-input"
                                        id="etag"
                                        name="etag"
                                        onChange={onChange}
                                    />
                                </div>
                            </form>
                        </div>

                        {/* Footer */}
                        <div className="modal-footer border-0 mt-2">
                            <button
                                ref={refClose}
                                type="button"
                                className="btn btn-light px-4 rounded-3"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>

                            <button
                                disabled={
                                    note.etitle.length < 5 ||
                                    note.edescription.length < 5 ||
                                    note.etag.length < 2
                                }
                                type="button"
                                onClick={handleClick}
                                className="btn btn-primary px-4 rounded-3"
                            >
                                Save Changes
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            {/* Notes List */}
            <div className="row g-3">
                {notes.length === 0 && (
                    <p className="text-muted">No notes to display</p>
                )}
                {notes.map((note) => (
                    <NoteItem
                        key={note._id}
                        updateNote={updateNote}
                        note={note}
                        showAlert={props.showAlert}
                    />
                ))}
            </div>
        </div>
    );
}

export default NotesPage;
