import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Genre extends Component {
  render() {
    const { funcao, valor } = this.props;
    return (
      <label htmlFor="genero" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          onChange={ funcao }
          name="genre"
          id="genero"
          value={ valor }
        >
          <option data-testid="genre-option" value="action" selected>Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>

        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  funcao: PropTypes.func.isRequired,
  valor: PropTypes.string.isRequired,
};

export default Genre;
