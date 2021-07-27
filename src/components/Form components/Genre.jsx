import React from 'react';
import PropType from 'prop-types';

class Genre extends React.Component {
  render() {
    const { handleChange, genre } = this.props;

    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero:
        <select
          name="genre"
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
    );
  }
}

Genre.propTypes = {
  genre: PropType.string.isRequired,
  handleChange: PropType.func.isRequired,
};

export default Genre;
