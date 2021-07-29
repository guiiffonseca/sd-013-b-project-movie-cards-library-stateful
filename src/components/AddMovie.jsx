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
    </form>
  );
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
