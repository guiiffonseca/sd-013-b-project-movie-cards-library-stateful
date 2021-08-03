import React from 'react';
import AddMovie from './components/AddMovie';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import SearchBar from './components/SearchBar';
import movies from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;
