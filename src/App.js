import React from 'react';
import Header from './components/Header';
import './App.css';
import movies from './data';
// import MovieList from './components/MovieList';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
    </div>
  );
}
