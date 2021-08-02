import React from 'react';

import Header from './components/Header';
// import MovieList from './components/MovieList';
import MovieLibrary from './components/MovieLibrary';
import AddMovie from './components/AddMovie';
import movies from './data';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
      <AddMovie />
    </div>
  );
}

export default App;
