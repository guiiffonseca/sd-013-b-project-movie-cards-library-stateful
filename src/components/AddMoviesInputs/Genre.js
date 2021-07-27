import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const p = this.props;
    return (
      <div>
        <label data-testid="genre-input-label" htmlFor="addmoviegenre">
          Gênero
          <select
            id="addmoviegenre"
            value={ p.value }
            data-testid="genre-input"
            onChange={ p.onChange }
            name="genre"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>);
  }
}
Genre.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Genre;
