import React from 'react';
import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
      <MovieList className="movie-list" movies={ movies } title={ movies.title } />
    </div>
  );
}

export default App;
