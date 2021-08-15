import React from 'react';
import PropTypes from 'prop-types';

class FormFirst extends React.Component {
  render() {
    const { subtitle, title, imagePath, storyline } = this.props;
    return (
      <div>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            name="title"
            value={ title }
            onChange={ this.handleChange }
            type="text"
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            value={ subtitle }
            onChange={ this.handleChange }
            type="text"
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            value={ imagePath }
            onChange={ this.handleChange }
            type="text"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange }
            data-testid="storyline-input"
          />
        </label>
      </div>

    );
  }
}

FormFirst.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
};

export default FormFirst;
