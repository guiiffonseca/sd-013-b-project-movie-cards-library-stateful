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
      <MovieList movies={ movies } />
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;
