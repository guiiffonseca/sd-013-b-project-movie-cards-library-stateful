import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { state, evento } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          id="genre"
          value={ state }
          onChange={ evento }
          name="genre"
          type="text"
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
  state: PropTypes.string,
  evento: PropTypes.func,
};

Genre.defaultProps = {
  state: '',
  evento: undefined,
};

export default Genre;
