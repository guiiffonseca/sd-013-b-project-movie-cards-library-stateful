import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      /* bookmarkValue, genreValue, */ onSearchTextChange,
      /* funcBookmarked, funcGenre */
    } = this.props;

    return (
      <div>
        <form className="form" data-testid="search-bar-form">
          <fieldset>
            <legend>Busca de filmes:</legend>
            <br />
            <label htmlFor="searchText" data-testid="text-input-label">
              Inclui o texto:
              <input
                id="searchText"
                name="searchText"
                data-testid="text-input"
                type="text"
                value={ searchText }
                onChange={ onSearchTextChange }
              />
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  // bookmarkValue: PropTypes.bool.isRequired,
  // genreValue: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  // funcBookmarked: PropTypes.func.isRequired,
  // funcGenre: PropTypes.func.isRequired,
};

export default SearchBar;
