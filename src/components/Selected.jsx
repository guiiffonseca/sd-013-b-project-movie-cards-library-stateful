import React from 'react';
import PropTypes from 'prop-types';

class Selected extends React.Component {
  render() {
    const { genre, OnChange } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ OnChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Selected.propTypes = {
  genre: PropTypes.string,
  OnChange: PropTypes.func,
}.isRequired;

export default Selected;
