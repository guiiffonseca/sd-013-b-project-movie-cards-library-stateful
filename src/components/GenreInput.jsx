import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenreInput extends Component {
  render() {
    const { valueProp, on } = this.props;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={ valueProp }
          onChange={ on }
        >
          <option value="action" data-testid="genre-input">Ação</option>
          <option value="comedy" data-testid="genre-input">Comédia</option>
          <option value="thriller" data-testid="genre-input">Suspense</option>
        </select>
        {/* <input
          data-test-id="genre-input"
          type="text"
          value={ valueProp }
          name="genre"
          onChange={ on }
        /> */}
      </label>
    );
  }
}

GenreInput.propTypes = {
  valueProp: PropTypes.string.isRequired,
  on: PropTypes.func.isRequired,
};

export default GenreInput;
