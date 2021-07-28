import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

export default class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies: this.props.movies,
    };
  }

  render() {
    const { movies: { title, subtitle, storyline,
      imagePath, rating, genre } } = this.props;
    console.log(title);
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <AddMovie
          title={ title }
          subtitle={ subtitle }
          storyline={ storyline }
          imagePath={ imagePath }
          rating={ rating }
          genre={ genre }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ).isRequired,
};
