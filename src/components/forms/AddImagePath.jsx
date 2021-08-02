import React from 'react';

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

export default AddImagePath;
