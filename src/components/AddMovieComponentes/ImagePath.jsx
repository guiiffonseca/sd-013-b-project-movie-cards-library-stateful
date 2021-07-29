import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { state, evento } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          id="imagePath"
          value={ state }
          onChange={ evento }
          name="imagePath"
          type="text"
          data-testid="image-input"
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  state: PropTypes.string,
  evento: PropTypes.func,
};

ImagePath.defaultProps = {
  state: '',
  evento: undefined,
};

export default ImagePath;
