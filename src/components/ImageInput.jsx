import React from 'react';

class ImageInput extends React.Component {
  constructor() {
    super();
    this.state = {
      imagePath: '',
    };
    this.handleChangeOnImage = this.handleChangeOnImage.bind(this);
  }

  handleChangeOnImage = (event) => {
    this.setState({
      imagePath: event.target.value,
    });
    console.log(this);
  }

  render() {
    const { imagePath } = this.state;

    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          id="image-input"
          value={ imagePath }
          onChange={ this.handleChangeOnImage }
        />
      </label>
    );
  }
}

export default ImageInput;
