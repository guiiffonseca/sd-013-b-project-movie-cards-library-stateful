import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ this.handleChange }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ this.handleChange }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ this.handleChange }
      />
    );
  }
}
