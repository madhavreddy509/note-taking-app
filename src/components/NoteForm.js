// src/components/NoteForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/noteActions';
import './NoteForm.css'; 

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({
      id: Math.random(),
      title,
      content,
      pinned: false
    });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Enter note title" 
        required 
      />
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="Enter note content" 
        required 
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default connect(null, { addNote })(NoteForm);
