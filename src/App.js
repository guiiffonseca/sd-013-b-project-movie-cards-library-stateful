import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import Movies from './data';

function alteraFilmes(novos) {
  Movies.push(novos);
}

function App() {
  return (
    <div id="App" className="App">
      <Header />
      <MovieLibrary movies={ Movies } funcao={ alteraFilmes } />
    </div>
  );
}

export default App;
