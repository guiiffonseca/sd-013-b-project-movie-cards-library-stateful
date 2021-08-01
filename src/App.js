import React from 'react';
import './App.css';
import Header from './components/Header';
// import MovieList from './components/MovieList';
import movies from './data';
// import SearchBar from './components/SearchBar';
// import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div>
      <Header />
      {/* <SearchBar />
      <MovieList movies={ movies } /> */}
      <MovieLibrary movies={ movies } />
      {/* <AddMovie onClick={ () => {} } /> */}
    </div>
  );
}

export default App;
