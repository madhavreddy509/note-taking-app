// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import Sidebar from './components/sidebar';
import './App.css'; 

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <Sidebar/>
        <div className="content">
          <NoteForm />
          <NoteList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
