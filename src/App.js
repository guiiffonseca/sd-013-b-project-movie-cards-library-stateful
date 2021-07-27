import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

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
      <AddMovie onClick={ call } />
    </div>
  );
}

export default App;
