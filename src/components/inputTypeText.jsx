import React from 'react';
import PropTypes from 'prop-types';

class InputTypeText extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyline, handleInput } = this.props;
    return (
      <div>
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            type="text"
            data-testid="title-input"
            name="title"
            value={ title }
            onChange={ handleInput }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            name="subtitle"
            value={ subtitle }
            onChange={ handleInput }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            name="imagePath"
            value={ imagePath }
            onChange={ handleInput }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="sinopse">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            cols="30"
            rows="10"
            value={ storyline }
            onChange={ handleInput }
          />
        </label>
      </div>
    );
  }
}

InputTypeText.propTypes = {

  title: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,

};

export default InputTypeText;
