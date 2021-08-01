import React from 'react';
import PropTypes from 'prop-types';

class InputAddMovie extends React.Component {
  render() {
    const { rating, genre, handleInput } = this.props;
    return (
      <div>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            value={ rating }
            onChange={ handleInput }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            value={ genre }
            onChange={ handleInput }
          >
            <option data-testid="genre-option" value="action"> Ação </option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>

          </select>
        </label>
      </div>
    );
  }
}

InputAddMovie.propTypes = {

  genre: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  rating: PropTypes.string.isRequired,

};

export default InputAddMovie;
