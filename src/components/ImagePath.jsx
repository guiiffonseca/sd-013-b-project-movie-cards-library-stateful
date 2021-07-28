import React from 'react';
import PropTypes from 'prop-types';

export default class ImagePath extends React.Component {

  render() {
    const { imagePath } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="image-input"
          value={ imagePath }
          data-testid="image-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imagePath: PropTypes.string.isRequired,
};
