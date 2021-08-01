import React from 'react';
import Header from './components/Header';
import './App.css';
// import MovieLibrary from './components/MovieLibrary';
import Movielist from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MovieLibrary /> */}
      <Movielist movies={ movies } />
    </div>
  );
}

export default App;
