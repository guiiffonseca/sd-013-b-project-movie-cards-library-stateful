import React from 'react';

import Header from './components/Header';
import SearchBar from './components/SearchBar';

import './App.css';

class App extends React.Component {
  render() {
    const fnDefault = () => {};
    const stringDefault = '';
    const boolDefault = true;
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText={ stringDefault }
          onSearchTextChange={ fnDefault }
          bookmarkedOnly={ boolDefault }
          onBookmarkedChange={ fnDefault }
          selectedGenre={ stringDefault }
          onSelectedGenreChange={ fnDefault }
        />
      </div>
    );
  }
}

export default App;
