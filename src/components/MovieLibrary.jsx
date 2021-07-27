import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);

    const p = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props,
    };
  }

  onInputChange(e) {
    const s = this.state;
    const { name, type } = e.target;
    let { value } = e.target;
    if (type === 'checkbox')value = !s.bookmarkedOnly;
    this.setState({ [name]: value });
  }

  render() {
    const s = this.state;
    return (
      <div>
        <SearchBar
          searchText={ s.searchText }
          onSearchTextChange={ this.onInputChange }
          bookmarkedOnly={ s.bookmarkedOnly }
          onBookmarkedChange={ this.onInputChange }
          selectedGenre={ s.selectedGenre }
          onSelectedGenreChange={ this.onInputChange }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
