import React from 'react';
import PropTypes from 'prop-types';

export default class Title extends React.Component {
  render() {
    const { value, funcao } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          data-testid="genre-input"
          id="genre"
          name="genre"
          value={ value }
          onChange={ funcao }
        >
          <option data-testid="genre-option" value="action">
            Ação
          </option>
          <option data-testid="genre-option" value="comedy">
            Comédia
          </option>
          <option data-testid="genre-option" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};
