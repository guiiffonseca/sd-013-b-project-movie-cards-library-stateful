import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import AddMovies from './components/AddMovie';
import './App.css';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText=""
        onSearchTextChange=""
        bookmarkedOnly=""
        onBookmarkedChange=""
        selectedGenre=""
        onSelectedGenre=""
      />
      <MovieList movies={ movies } />
      <AddMovies />
    </div>
  );
}

export default App;
