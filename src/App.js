import React from 'react';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';
import OnClick from './components/OnClick';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovie onClick={ OnClick } />
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;
