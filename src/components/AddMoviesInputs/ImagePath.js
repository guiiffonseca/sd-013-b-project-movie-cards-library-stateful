import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const p = this.props;
    return (
      <div>
        <label data-testid="image-input-label" htmlFor="addmovieimagepathinput">
          Imagem:
          <input
            type="text"
            id="addmovieimagepathinput"
            value={ p.value }
            data-testid="image-input"
            onChange={ p.onChange }
            name="imagePath"
          />
        </label>
      </div>);
  }
}

ImagePath.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImagePath;
