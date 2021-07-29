import React from 'react';
import PropTypes from 'prop-types';

class InputLabel extends React.Component {
  render() {
    const { name, type = 'text', textContent, handleChange, value, } = this.props;
    // const { title, subtitle, imagePath, storyline } = addMovieState;
    // imagePath, storyline, rating title,
    return (
      <>
        <label htmlFor={ name } data-testid={ `${(name === 'imagePath') ? 'image' : name}-input-label` }>
          {textContent}
          <input
            type={ type }
            name={ name }
            value={ value }
            data-testid={ `${(name === 'imagePath') ? 'image' : name}-input` }
            onChange={ handleChange }
          />
        </label>
        {/* <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo:
          <input
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ handleChange }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem:
          <input
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ handleChange }
            data-testid="image-input"
          />
        </label>
         */}
      </>
    );
  }
}

InputLabel.propTypes = {
  addMovieState: PropTypes.objectOf(PropTypes.string),
  handleChange: PropTypes.objectOf(PropTypes.object),
};

InputLabel.defaultProps = {
  addMovieState: PropTypes.objectOf(PropTypes.string),
  handleChange: PropTypes.objectOf(PropTypes.object),
};

export default InputLabel;
