import React from 'react';
import PropTypes from 'prop-types';

class AddMovieInputGenre extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="select">
        Gênero
        <select
          value={ genre }
          onChange={ handleChange }
          name="genre"
          id="genre"
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>

        </select>
      </label>
    );
  }
}

AddMovieInputGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieInputGenre;
