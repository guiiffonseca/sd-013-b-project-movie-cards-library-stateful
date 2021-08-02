import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import movies from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText={ movies }
        onSearchTextChange={ movies }
        bookmarkedOnly={ movies }
        onBookmarkedChange={ movies }
        selectedGenre={ movies }
        onSelectedGenreChange={ movies }
      />
    </div>
  );
}

export default App;
