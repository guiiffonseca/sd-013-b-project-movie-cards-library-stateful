import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { imagePath, onChange } = this.props;
    return (
      <label htmlFor="image-input-lab" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          id="image-input-lab"
          name="imagePath"
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
  onChange: PropTypes.func.isRequired,
};

export default InputImage;
