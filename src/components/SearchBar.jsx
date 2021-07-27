import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      search: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { search } = this.state;
    return (
      <section className="search-bar">
        <input
          type="text"
          name="search"
          value={ search }
          id="search"
          onChange={ this.handleChange }
        />
      </section>
    );
  }
}

SearchBar.propTypes = {
  movie: PropTypes.exact({
    searchText: PropTypes.string,
    bookmarkedOnly: PropTypes.bool,
    selectedGenre: PropTypes.string,
  }).isRequired,
};

export default SearchBar;
