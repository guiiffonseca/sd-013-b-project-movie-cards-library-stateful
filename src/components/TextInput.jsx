import React from 'react';
import PropTypes from 'prop-types';

const inputTranslate = {
  title: 'Título',
  subtitle: 'Subtítulo',
  image: 'Imagem',
  rating: 'Avaliação',
  text: 'Inclui o texto:',
};

function TextInput(props) {
  const { label, text, setText, type } = props;
  return (
    <label htmlFor={ `label-movie-${text}` } data-testid={ `${label}-input-label` }>
      {inputTranslate[label]}
      <input
        name={ label !== 'image' ? label : 'imagePath' }
        type={ type }
        value={ text }
        data-testid={ `${label}-input` }
        onChange={ setText }
      />
    </label>
  );
}
//   (event) => {
//   if (type === 'number') {
//     setText(Number(event.target.value));
//     return;
//   }
//   setText(event.target.value);
// }

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default TextInput;
