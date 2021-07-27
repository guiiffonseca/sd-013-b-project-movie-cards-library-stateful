import React from 'react';
import './App.css';
import Header from './components/Header';
// import MovieLibrary from './components/MovieLibrary';
import MovieList from './components/MovieList';
import movies from './data';
import SearchBar from './components/SearchBar';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

export default App;
