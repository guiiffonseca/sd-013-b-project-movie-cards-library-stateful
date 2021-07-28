import React from 'react';
import Header from './components/Header';
// import SearchBar from './Components/SearchBar';
import data from './data';
import './App.css';
import MovieList from './components/MovieList';
// import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ data } />
    </div>
  );
}
export default App;