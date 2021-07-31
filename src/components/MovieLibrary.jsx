import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

function MovieLibrary(props) {
  const { movies } = props;
  const [movieList, setMovieList] = useState(movies);
  const [searchText, setSearchText] = useState('');
  const [bookmarkedOnly, setbookmarkedOnly] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('');
  return (
    <>
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ (event) => setSearchText(event.target.value) }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ () => setbookmarkedOnly(!bookmarkedOnly) }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ (event) => setSelectedGenre(event.target.value) }
      />
      <MovieList
        movies={ movieList.filter((movie) => {
          if (
            bookmarkedOnly === movie.bookmarked
            && movie.genre.includes(selectedGenre)
          ) {
            return (
              movie.title.toLowerCase().includes(searchText.toLowerCase())
              || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
              || movie.storyline.toLowerCase().includes(searchText.toLowerCase())
            );
          }
          if (bookmarkedOnly === false && movie.genre.includes(selectedGenre)) {
            return (
              movie.title.toLowerCase().includes(searchText.toLowerCase())
              || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
              || movie.storyline.toLowerCase().includes(searchText.toLowerCase())
            );
          }
          return null;
        }) }
        bookmarkedOnly={ bookmarkedOnly }
        selectedGenre={ selectedGenre }
      />
      <AddMovie onClick={ (movie) => setMovieList([...movieList, movie]) } />
    </>
  );
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
