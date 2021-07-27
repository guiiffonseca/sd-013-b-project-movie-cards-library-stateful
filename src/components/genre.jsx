import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { genre, handleOnChange } = this.props;

    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ handleOnChange }
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
  genre: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default Genre;
