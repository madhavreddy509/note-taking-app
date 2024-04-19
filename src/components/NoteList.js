// src/components/NoteList.js
import React from 'react';
import { connect } from 'react-redux';
import { deleteNote, pinNote } from '../actions/noteActions';
import './NoteList.css'; // Import CSS file for styling

const NoteList = ({ notes, deleteNote, pinNote }) => {
  // Separate pinned and unpinned notes
  const pinnedNotes = notes.filter(note => note.pinned);
  const unpinnedNotes = notes.filter(note => !note.pinned);

  return (
    <div className="note-list-container">
      {/* Pinned Notes Section */}
      {pinnedNotes.length > 0 && (
        <div className="section-container">
          <h2>Pinned Notes</h2>
          <div className="notes-row">
            {pinnedNotes.map(note => (
              <div key={note.id} className="note-box">
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <div>
                  <button onClick={() => deleteNote(note.id)}>Delete</button>
                  <button onClick={() => pinNote(note.id)}>Unpin</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Unpinned Notes Section */}
      {unpinnedNotes.length > 0 && (
        <div className="section-container">
          <h2>Unpinned Notes</h2>
          <div className="notes-row">
            {unpinnedNotes.map(note => (
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
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(mapStateToProps, { deleteNote, pinNote })(NoteList);
