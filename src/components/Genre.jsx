import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="Genre" data-testid="genre-input-label">
        Gênero:
        <select
          id="Genre"
          data-testid="genre-input"
          value={ value }
          onChange={ onChange }
          name="genre"
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
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
export default Genre;
