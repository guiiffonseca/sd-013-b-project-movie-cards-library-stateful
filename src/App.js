import React from 'react';
import Header from './components/Header';
import data from './data';
import './App.css';

import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ data }/>
    </div>
  );
}

export default App;
