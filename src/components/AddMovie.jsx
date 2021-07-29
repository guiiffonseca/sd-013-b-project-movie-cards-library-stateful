/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddMovie(props) {
  const { onClick } = props;
  const [subtitle, setSubtitle] = useState('');
  const [title, setTitle] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [storyLine, setStoryline] = useState('');
  const [rating, setRating] = useState(0);
  const [genre, setGenre] = useState('action');

  return (
    <form data-testid="add-movie-form">
      <label htmlFor="label-movie-title" data-testid="title-input-label">
        Título
        <input
          type="text"
          value={ title }
          data-testid="title-input"
          onChange={ (event) => {
            setTitle(event.target.value);
          } }
        />
      </label>
      <label htmlFor="label-movie-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ (event) => {
            setSubtitle(event.target.value);
          } }
        />
      </label>
      <label htmlFor="label-movie-image" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          value={ imagePath }
          data-testid="image-input"
          onChange={ (event) => {
            setImagePath(event.target.value);
          } }
        />
      </label>
      <label htmlFor="label-movie-textarea" data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ storyLine }
          data-testid="storyline-input"
          onChange={ (event) => {
            setStoryline(event.target.value);
          } }
        />
      </label>
      <label htmlFor="label-movie-rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ (event) => {
            setRating(event.target.value);
          } }
        />
      </label>
      <label htmlFor="select-genre" data-testid="genre-input-label">
        Gênero
        <select
          id="select-genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ (event) => {
            setGenre(event.target.value);
          } }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
      <button
        data-testid="send-button"
        type="reset"
        onClick={ () => {
          setTitle('');
          setSubtitle('');
          setStoryline('');
          setRating(0);
          setGenre('action');
          onClick();
        } }
      >
        Adicionar filme

      </button>
    </form>
  );
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
