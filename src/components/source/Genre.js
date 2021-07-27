import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Genre extends Component {
  render() {
    const { funcao } = this.props;
    return (
      <label htmlFor="genero" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          onChange={ funcao }
          name="genre"
          id="genero"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>

        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  valor: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};

export default Genre;
