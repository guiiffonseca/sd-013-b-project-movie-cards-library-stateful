import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { state, callback } = this.props;

    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          value={ state }
          onChange={ callback }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  state: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default ImagePath;
