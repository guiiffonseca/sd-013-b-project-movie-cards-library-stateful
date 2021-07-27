import React from 'react';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovie
        onCLick={ () => console.log('4') }
      />

    </div>
  );
}

export default App;
