import React, { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';

const NoteItem = (props) => {
  const { note, updateNote } = props;
  const { deleteNote } = useContext(NoteContext);

  return (
    <div className="col-md-6 col-lg-4 col-xl-3 my-3">
      <div className="note-card shadow-sm rounded-4">
        
        {/* Header */}
        <div className="note-card-header d-flex justify-content-between align-items-start">
          <h5 className="note-title text-truncate">{note.title}</h5>

          <div className="note-actions d-flex">
            <i
              className="fa-solid fa-pen-to-square edit-icon"
              role="button"
              title="Edit Note"
              onClick={() => updateNote(note)}
            ></i>
            <i
              className="fa-solid fa-trash delete-icon ms-3"
              role="button"
              title="Delete Note"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert('Deleted successfully', 'success');
              }}
            ></i>
          </div>
        </div>

        {/* Body */}
        <div className="note-card-body">
          <p className="note-description">{note.description}</p>
        </div>

        {/* Footer */}
        <div className="note-card-footer">
          <span className="note-tag">{note.tag || "General"}</span>
        </div>

      </div>
    </div>
  );
};

export default NoteItem;
