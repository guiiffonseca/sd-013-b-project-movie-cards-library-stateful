// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.onSearchTextChange.bind(this);
  }

  onSearchTextChange(event) {
    const { name, value } = event.target;
    console.log(value);
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { props } = this;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            name=""
            value={ props.searchText }
            onChange={ props.onSearchTextChange }
            type="text"
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBar;
