import React from 'react';
import './App.css';
import Header from './components/Header';
import data from './data';
// import MovieList from './components/MovieList';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ data } />
    </div>
  );
}

export default App;
