/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import GenreInput from './GenreInput';
import TextAreaInput from './TextAreaInput';

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
      <TextInput label="title" text={ title } type="text" setText={ setTitle } />
      <TextInput
        label="subtitle"
        text={ subtitle }
        type="text"
        setText={ setSubtitle }
      />
      <TextInput
        label="image"
        text={ imagePath }
        type="text"
        setText={ setImagePath }
      />
      <TextAreaInput storyLine={ storyLine } setStoryline={ setStoryline } />
      <TextInput
        label="rating"
        text={ rating.toString() }
        type="number"
        setText={ setRating }
      />
      <GenreInput genre={ genre } setGenre={ setGenre } />
      <button
        data-testid="send-button"
        type="reset"
        onClick={ () => {
          onClick({
            title,
            subtitle,
            storyLine,
            rating,
            genre,
          });
          setTitle('');
          setSubtitle('');
          setStoryline('');
          setRating(0);
          setGenre('action');
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
