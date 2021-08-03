import React from 'react';
import PropTypes from 'prop-types';

class AddImagePath extends React.Component {
  render() {
    const { imagePath, onChange } = this.props;

    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddImagePath.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default AddImagePath;
