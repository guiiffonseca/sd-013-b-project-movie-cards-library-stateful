import React from 'react';
import PropTypes from 'prop-types';

function GenreInput(props) {
  const { genre, setGenre } = props;
  return (

    <label htmlFor="select-genre" data-testid="genre-input-label">
      Gênero
      <select
        name="genre"
        id="select-genre"
        data-testid="genre-input"
        value={ genre }
        onChange={ (e) => {
          console.log(e.target.name);
          setGenre(e);
        } }
      >
        <option value="action" data-testid="genre-option">
          Ação
        </option>
        <option value="comedy" data-testid="genre-option">
          Comédia
        </option>
        <option value="thriller" data-testid="genre-option">
          Suspense
        </option>
      </select>
    </label>
  );
}

GenreInput.propTypes = {
  genre: PropTypes.string.isRequired,
  setGenre: PropTypes.func.isRequired,
};

export default GenreInput;
