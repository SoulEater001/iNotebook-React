import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const navigate = useNavigate();
  const { getNotes } = useContext(NoteContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
  }, [getNotes, navigate]);

  return (
    <>
      {/* Only Add Note Section */}
      <AddNote showAlert={props.showAlert} />
    </>
  );
};

export default Notes;
