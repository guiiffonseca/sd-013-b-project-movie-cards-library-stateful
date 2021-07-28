import React from 'react';
import './App.css';
import Header from './components/Header';
import data from './data';
// import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ data } />
      <AddMovie />
    </div>
  );
}

export default App;
