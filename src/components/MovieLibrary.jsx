import React, { Component } from 'react';

// import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    return console.log('');
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText=""
          onSearchTextChange={ () => 'callback' }
          bookmarkedOnl="true"
          onBookmarkedChange={ () => 'callback' }
          selectedGenre=""
          onSelectedGenreChange={ () => 'callback' }
        />
        {/* <MovieList movies={ this.props.movies } /> */}
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

export default MovieLibrary;
