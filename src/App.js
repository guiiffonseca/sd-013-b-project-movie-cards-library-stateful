import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  const call = () => {
    const texto = 'teste';
    console.log(texto);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText=""
        onSearchTextChange={ call }
        bookmarkedOnly={ false }
        onBookmarkedChange={ call }
        selectedGenre="abc"
        onSelectedGenreChange={ call }
      />
    </div>
  );
}

export default App;
