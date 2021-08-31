/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SelectGenre extends Component {
  render() {
    const { selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <div>
        <label className="imputGenreLabel" data-testid="select-input-label">
          Filtrar por gênero
          <select
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

SelectGenre.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
