
import React from 'react';
import { connect } from 'react-redux';
import { deleteNote, pinNote } from '../actions/noteActions';
import './NoteList.css'; 

const NoteList = ({ notes, deleteNote, pinNote }) => {
  
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
                  <button onClick={() => deleteNote(note.id)} className="icon-button"><span className="icon delete-icon">&#128465;</span> </button>
                  <button onClick={() => pinNote(note.id)} className="icon-button"><span className="icon">&#128204;</span></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Unpinned Notes Section */}
      {unpinnedNotes.length > 0 && (
        <div className="section-container">
          <h2> Notes</h2>
          <div className="notes-row">
            {unpinnedNotes.map(note => (
              <div key={note.id} className="note-box">
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <div>
                  <button onClick={() => deleteNote(note.id)} className="icon-button"><span className="icon delete-icon">&#128465;</span> </button>
                  <button onClick={() => pinNote(note.id)} className="icon-button"><span className="icon">&#128204;</span></button>
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
