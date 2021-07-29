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
    <h1>teste</h1>
  );
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
