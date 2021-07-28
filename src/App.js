import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const onClick = (param) => {
    console.log('bob');
    console.log(param);
    return 'estou aqui';
  };

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie onClick={ onClick } />
    </div>
  );
}

export default App;
