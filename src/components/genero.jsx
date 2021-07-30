import React from 'react';
import PropTypes from 'prop-types';

class Genero extends React.Component {
  render() {
    const { genre, onChange } = this.props;
    return (
      <label htmlFor="gen" data-testid="genre-input-label">
        Gênero
        <select
          name="gen"
          id="gen"
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
Genero.propTypes = {
  genre: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Genero;
