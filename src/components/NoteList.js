// src/components/NoteList.js
import React from 'react';
import { connect } from 'react-redux';
import { deleteNote, pinNote } from '../actions/noteActions';
import './NoteList.css'; // Import CSS file for styling

const NoteList = ({ notes, deleteNote, pinNote }) => {
  return (
    <div className="note-list-container">
      {notes.map(note => (
        <div key={note.id} className="note-box">
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <div>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
            <button onClick={() => pinNote(note.id)}>Pin</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(mapStateToProps, { deleteNote, pinNote })(NoteList);
