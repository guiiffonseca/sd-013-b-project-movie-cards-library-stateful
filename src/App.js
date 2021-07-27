import React from 'react';
import Header from './components/Header';
import './App.css';
import SeacrhBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

function teste(estado) {
  
}

function App() {
  return (
    <div id="App" className="App">
      <Header />
      <SeacrhBar
        searchText=""
        onSearchTextChange=""
        bookmarkedOnly=""
        onBookmarkedChange=""
      />

      <AddMovie
      onClick = {teste}
      />
    </div>
  );
}

export default App;
