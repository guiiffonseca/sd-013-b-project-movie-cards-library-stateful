import React from 'react';
import PropTypes from 'prop-types';

const inputTranslate = {
  Título: 'title',
  Subtítulo: 'subtitle',
  Imagem: 'image',
  Avaliação: 'rating',
};

function TextInput(props) {
  const { label, text, setText, type } = props;
  return (
    <label
      htmlFor={ `label-movie-${text}` }
      data-testid={ `${inputTranslate[label]}-input-label` }
    >
      {label}
      <input
        type={ type }
        value={ text }
        data-testid={ `${inputTranslate[label]}-input` }
        onChange={ (event) => {
          if (type === 'number') {
            setText(Number(event.target.value));
            return;
          }
          setText(event.target.value);
        } }
      />
    </label>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default TextInput;
