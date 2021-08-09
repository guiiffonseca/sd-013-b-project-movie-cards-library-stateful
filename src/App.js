import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <SearchBar
//         searchText=""
//         onSearchTextChange={ movies }
//         bookmarkedOnly={ false }
//         onBookmarkedChange={ movies }
//         selectedGenre={ movies }
//         onSelectedGenreChange={ movies }
//       />
//       <MovieLibrary />
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText=""
          onSearchTextChange={ movies }
          bookmarkedOnly={ false }
          onBookmarkedChange={ movies }
          selectedGenre={ movies }
          onSelectedGenreChange={ movies }
        />
        <MovieLibrary />
      </div>
    );
  }
}

export default App;
