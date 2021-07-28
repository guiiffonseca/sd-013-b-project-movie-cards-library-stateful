import React from 'react';
import PropTypes from 'prop-types';

export default class MakeSelect extends React.Component {
  render() {
    const {
      genre,
      handleChange,
    } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero:
        <select
          type="string"
          id="genre"
          name="genre"
          value={ genre }
          onChange={ handleChange }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">
            Ação
          </option>
          <option value="comedy" data-testid="genre-option">
            Comédia
          </option>
          <option value="thriller" data-testid="genre-option">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

MakeSelect.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
