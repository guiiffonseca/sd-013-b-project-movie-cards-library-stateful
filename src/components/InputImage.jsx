import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { imagePath } = this.props;
    return (
      <label htmlFor="image-input-lab" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          id="image-input-lab"
          name="image-input"
          value={ imagePath }
          data-testid="image-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
};

export default InputImage;
