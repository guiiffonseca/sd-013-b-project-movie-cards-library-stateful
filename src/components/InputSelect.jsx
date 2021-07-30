import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input-lab">
        Gênero
        <select
          id="genre-input-lab"
          name="genre-input"
          value={ genre }
          onChange={ onChange }
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

InputImage.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default InputSelect;
