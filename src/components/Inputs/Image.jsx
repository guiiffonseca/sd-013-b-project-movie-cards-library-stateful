import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { handle, inputValue, name } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imageInput">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          value={ inputValue || '' }
          onChange={ handle }
          name={ name }
        />
      </label>
    );
  }
}

Image.propTypes = {
  handle: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Image;
