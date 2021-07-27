import React from 'react';
import Header from './components/Header';
import './App.css';
import SeacrhBar from './components/SearchBar';

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
    </div>
  );
}

export default App;
