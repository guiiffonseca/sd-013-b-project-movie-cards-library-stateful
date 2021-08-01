/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import GenreInput from './GenreInput';
import TextAreaInput from './TextAreaInput';

// const [title, setTitle] = useState('');
// const [subtitle, setSubtitle] = useState('');
// const [imagePath, setImagePath] = useState('');
// const [storyLine, setStoryline] = useState('');
// const [rating, setRating] = useState(0);
// const [genre, setGenre] = useState('action');
const initialState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyLine: '',
  rating: 0,
  genre: 'action',
};
function AddMovie(props) {
  const { onClick } = props;
  const [
    { title, subtitle, imagePath, storyLine, rating, genre }, setState,
  ] = useState(initialState);
  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form data-testid="add-movie-form">
      <TextInput label="title" text={ title } type="text" setText={ onChange } />
      <TextInput
        label="subtitle"
        text={ subtitle }
        type="text"
        setText={ onChange }
      />
      <TextInput
        label="image"
        text={ imagePath }
        type="text"
        setText={ onChange }
      />
      <TextAreaInput storyLine={ storyLine } setStoryline={ onChange } />
      <TextInput
        label="rating"
        text={ rating.toString() }
        type="number"
        setText={ onChange }
      />
      <GenreInput genre={ genre } setGenre={ onChange } />
      <button
        data-testid="send-button"
        type="reset"
        onClick={ () => {
          onClick({ title, subtitle, storyLine, rating, genre });
          setState(initialState);
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
