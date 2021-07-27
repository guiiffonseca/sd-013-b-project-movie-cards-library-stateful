import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Genre extends Component {
  render() {
    const { valor, funcao } = this.props;
    return (
        <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
              <select
          id="genre"
          name="genre"
          value={ valor }
          onChange={ funcao }
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
  valor: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};

export default Genre;