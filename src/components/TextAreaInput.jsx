import React from 'react';
import PropTypes from 'prop-types';

function TextAreaInput(props) {
  const { storyLine, setStoryline } = props;
  return (
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
  );
}

TextAreaInput.propTypes = {
  storyLine: PropTypes.string.isRequired,
  setStoryline: PropTypes.func.isRequired,
};

export default TextAreaInput;
