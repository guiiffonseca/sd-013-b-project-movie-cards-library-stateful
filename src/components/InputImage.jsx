import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { value, handleChanges } = this.props;
    return (
      <label htmlFor="image-inputs" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          id="image-inputs"
          value={ value }
          data-testid="image-input"
          onChange={ handleChanges }
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  value: PropTypes.string.isRequired,
  handleChanges: PropTypes.func.isRequired,
};

export default InputImage;
