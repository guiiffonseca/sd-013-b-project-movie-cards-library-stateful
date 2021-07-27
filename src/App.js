import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import data from './data';
import './App.css';

function App() {
  const { title } = data;
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie onChange={ title }/>
    </div>
  );
}

export default App;
