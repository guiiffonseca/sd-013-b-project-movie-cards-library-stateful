import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

function App() {
  return (
    <main className="App">
      <Header />
      <MovieLibrary />
      {/* <SearchBar
        searchText=""
        onSearchTextChange=""
        onBookmarkedChange=""
        selectedGenre=""
        onSelectedGenreChange=""
      />
      <AddMovie onClick="" /> */}
    </main>
  );
}

export default App;
