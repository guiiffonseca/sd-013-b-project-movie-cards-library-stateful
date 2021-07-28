import React from 'react';
import PropTypes from 'prop-types';
import Input from '../formFields/Input';

class Image extends React.Component {
  render() {
    const { value, change } = this.props;

    return (
      <Input
        labelId="image-input-label"
        txt="Imagem:"
        testid="image-input"
        id="imagePath"
        type="text"
        value={ value }
        onChange={ change }
      />
    );
  }
}

Image.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default Image;
