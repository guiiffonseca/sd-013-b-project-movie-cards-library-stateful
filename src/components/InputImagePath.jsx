import React from 'react';
import PropTypes from 'prop-types';

class InputImagePath extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          value={ value }
          data-testid="image-input"
          name="imagePath"
          id="image-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputImagePath.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputImagePath;
