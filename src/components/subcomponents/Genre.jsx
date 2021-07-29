import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { genre } = this.props;
    return (
      <label htmlFor="input-select-genre" data-testid="genre-input-label">
        Gênero
        <select
          id="input-select-genre"
          value={ genre }
          onChange="onSelectedGenreChange"
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  genre: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired,
};

export default Genre;
