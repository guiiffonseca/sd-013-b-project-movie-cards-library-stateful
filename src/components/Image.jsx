import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem:
        <input
          type="text"
          id="image"
          name="imagePath"
          data-testid="image-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default Image;
