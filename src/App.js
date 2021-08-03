import React from 'react';
import AddMovie from './components/AddMovie';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import SearchBar from './components/SearchBar';
import movies from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ onSearchTextChange }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ onBookmarkedChange }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ onSelectedGenreChange }
      />
      <MovieLibrary movies={ movies } />
      <AddMovie onClick={ onClick } />
    </div>
  );
}

export default App;
