import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label
        htmlFor="genre"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          data-testid="genre-input"
          id="genre"
          name="genre"
          onChange={ onChange }
          type="text"
          value={ value }
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Genre;
