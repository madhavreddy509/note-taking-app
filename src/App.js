// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Note Taking App</h1>
        <NoteForm />
        <NoteList />
      </div>
    </Provider>
  );
}

export default App;
