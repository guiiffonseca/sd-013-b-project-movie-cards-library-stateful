import React from 'react';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovie onClick={ console.log } />
    </div>
  );
}

export default App;
