import React from 'react';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MovieLibrary movie={ movies } /> */}
      <SearchBar />
    </div>
  );
}

export default App;
