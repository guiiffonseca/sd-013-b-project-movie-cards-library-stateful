import React from 'react';
import PropTypes from 'prop-types';

export default class DataComp extends React.Component {
  render() {
    const { subtitle, imagePath, storyline, handleChange } = this.props;
    return (
      <span>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle"
            name="subtitle"
            data-testid="subtitle-input"
            type="text"
            value={ subtitle }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            id="imagePath"
            name="imagePath"
            data-testid="image-input"
            type="text"
            value={ imagePath }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <input
            id="storyline"
            name="storyline"
            data-testid="storyline-input"
            type="text"
            value={ storyline }
            onChange={ handleChange }
          />
        </label>
      </span>
    );
  }
}

DataComp.propTypes = {
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
