import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import './App.css';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText=""
        onSearchTextChange=""
      />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
