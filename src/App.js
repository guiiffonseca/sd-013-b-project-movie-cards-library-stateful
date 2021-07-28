import React from 'react';
import Header from './components/Header';
import movies from './data';
import MovieList from './components/MovieList';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie />
      <MovieList className="movie-list" movies={ movies } title={ movies.title } />
    </div>
  );
}

export default App;
