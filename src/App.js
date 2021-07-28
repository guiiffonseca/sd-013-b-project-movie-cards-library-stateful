import React from 'react';
import Header from './components/Header';
import dataMovies from './data';
import './App.css';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ dataMovies } />
    </div>
  );
}

export default App;
