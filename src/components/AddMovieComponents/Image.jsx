import React from 'react';

class Image extends React.Component {
  constructor() {
    super();
    this.state = {
      imagePath: '',
    };

    this.handleChangeImage = this.handleChangeImage.bind(this);
  }

  handleChangeImage = (event) => {
    this.setState({
      imagePath: event.target.value,
    });
  }

  render() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          data-testid="image-input"
          id="image-input"
          type="text"
          value={ imagePath }
          onChange={ this.handleChangeImage }
        />
      </label>
    );
  }
}

export default Image;
