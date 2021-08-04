import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          name="imagePath"
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default ImagePath;

ImagePath.propTypes = {
  onChange: PropTypes.string.isRequired,
};
