import React from 'react';
import PropTypes from 'prop-types';

class AddMovieGenre extends React.Component {
  render() {
    const {
      genre,
      handleChange,
    } = this.props;

    return (
      <section>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            id="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </section>
    );
  }
}

AddMovieGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieGenre;
