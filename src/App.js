import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieList from './components/MovieList';
import movies from './data';
import AddMovie from './components/AddMovie';
import SearchBar from './components/SearchBar';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
      <SearchBar />
      <AddMovie />
      <MovieLibrary />
    </div>
  );
}

export default App;
