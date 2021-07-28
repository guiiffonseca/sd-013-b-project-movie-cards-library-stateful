import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import Movies from './data.js';

function App() {
  return (
    <div id="App" className="App">
      <Header />
      <MovieLibrary movies={Movies}/>
    </div>
  );
}

export default App;
