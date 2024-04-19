// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css'; // Import CSS file for styling

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <div className="sidebar">
          <a href="#" className="active">Page 1</a>
          <a href="#">Page 2</a>
          <a href="#">Page 3</a>
        </div>
        <div className="content">
          <h1>Note Taking App</h1>
          <NoteForm />
          <NoteList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
