import React from 'react';
import Header from './components/Header';
// import SearchBar from './Components/SearchBar';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
    </div>
  );
}
export default App;