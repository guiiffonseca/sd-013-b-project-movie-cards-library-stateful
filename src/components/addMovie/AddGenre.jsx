import React from 'react';
import PropTypes from 'prop-types';

class AddGenre extends React.Component {
  render() {
    const { genre, onChange } = this.props;
    return (
      <label
        htmlFor="add-movie-genre"
        data-testid="genre-input-label"
      >
        Gênero:
        <select
          id="add-movie-genre"
          className="search-field"
          data-testid="genre-input"
          name="genre"
          value={ genre }
          onChange={ onChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

AddGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddGenre;
