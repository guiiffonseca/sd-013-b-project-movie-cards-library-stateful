import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { handle, inputValue, name } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genreInput">
        Gênero
        <select
          data-testid="genre-input"
          type="text"
          value={ inputValue || 'action' }
          onChange={ handle }
          name={ name }
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
  handle: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Genre;
