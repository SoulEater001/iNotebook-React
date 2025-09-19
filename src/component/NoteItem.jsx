import React, { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';

const NoteItem = (props) => {
  const { note, updateNote } = props;
  const { deleteNote } = useContext(NoteContext);

  return (
    <div className="col-md-4 col-lg-3 my-3">
      <div className="card shadow-sm border rounded h-100">
        {/* Card Header */}
        <div className="card-header d-flex justify-content-between align-items-center">
          <h6 className="mb-0 text-truncate">{note.title}</h6>
          <div>
            <i
              className="fa-solid fa-pen-to-square text-primary me-2"
              role="button"
              title="Edit Note"
              onClick={() => updateNote(note)}
            ></i>
            <i
              className="fa-solid fa-trash text-danger"
              role="button"
              title="Delete Note"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert('Deleted successfully', 'success');
              }}
            ></i>
          </div>
        </div>

        {/* Card Body */}
        <div className="card-body">
          <p className="card-text text-muted">{note.description}</p>
        </div>

        {/* Card Footer */}
        <div className="card-footer text-muted small">
          <span className="badge bg-secondary">{note.tag || 'General'}</span>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
