import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { state, callback } = this.props;

    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={ state }
          onChange={ callback }
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
  state: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Genre;
