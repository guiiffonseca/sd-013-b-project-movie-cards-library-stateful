import React from 'react';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import data from './data';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovie />
      <MovieList movies={ data } />

    </div>
  );
}

export default App;
