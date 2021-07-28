import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import Input from './Input';
import CheckBox from './CheckBox';

export default class SearchBar extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   'text-input': '',
    //   'checkbox-input': '',
    //   'select-input': '',
    // };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  handleClick({ e, target }) {
    e.preventDefault();
    console.log(target.type);
    return target === 'click' ? console.log('foi click') : console.log('NADA');
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  onSearchTextChange({ target }) {
    const { inputText } = this.state;
    console.log(target.value);
    this.setState({
      [inputText]: target.value,
    });
  }

  onSelectedGenreChange({ target }) {
    console.log(target);
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    console.log(this.props);
    return (
      <form data-testid="search-bar-form">
        <Input
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <CheckBox
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
        <Select
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <button onClick={ this.handleChange } type="button">teste</button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
