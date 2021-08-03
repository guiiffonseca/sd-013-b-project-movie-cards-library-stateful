import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="image"
        data-testid="image-input-label"
      >
        Imagem
        <input
          id="image"
          name="imagePath"
          onChange={ onChange }
          type="text"
          data-testid="image-input"
          value={ value }
        />
      </label>
    );
  }
}

Image.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Image;
