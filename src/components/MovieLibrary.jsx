// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',

    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(state) {
    console.log(state);
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { movies } = this.props;
    const newMovie = {
      subtitle,
      title,
      imagePath,
      storyline,
      rating: Number.parseFloat(rating),
      genre,

    };

    movies.push(newMovie);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;

    const call = () => {
      const texto = 'teste';
      console.log(texto);
    };
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ call }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ call }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ call }
        />

        <MovieList movies={ movies } />
        <AddMovie key={ movies } onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {

  movies: PropTypes.arrayOf.isRequired,
};

export default MovieLibrary;
