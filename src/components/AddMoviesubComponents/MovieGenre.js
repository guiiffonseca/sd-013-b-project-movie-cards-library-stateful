import React from 'react';
import PropTypes from 'prop-types';

class MovieGenre extends React.Component {

  render() {
    const { value, callBack } = this.props;
    return (
      <label
        data-testid="genre-input-label"
        htmlFor="genre"
      >
        Gênero
        <select
          type="select"
          name="genre"
          id="genre"
          data-testid="genre-input"
          value={ value }
          onChange={ callBack }
        >
          <option
            htmlFor="genre"
            value="action"
            data-testid="genre-option"
          >
            Ação
          </option>
          <option
            htmlFor="genre"
            value="comedy"
            data-testid="genre-option"
          >
            Comédia
          </option>
          <option
            htmlFor="genre"
            value="thriller"
            data-testid="genre-option"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

export default MovieGenre;

MovieGenre.propTypes = {
  value: PropTypes.string.isRequired,
  callBack: PropTypes.func.isRequired,
};
