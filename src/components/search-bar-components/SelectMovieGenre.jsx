import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectMovieGenre extends Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <label htmlFor="movie-genre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="movie-genre"
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

SelectMovieGenre.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SelectMovieGenre;
