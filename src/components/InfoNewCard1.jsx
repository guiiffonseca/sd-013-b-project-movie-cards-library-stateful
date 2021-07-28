import React, { Component } from 'react';

class InfoNewCard1 extends Component {
  render() {
    const { state, handleChange } = this.props;
    const { subtitle, title, imagePath } = state;

    return (
      <div>
        <label data-testid='title-input-label'>
          Título
          <input
            type='text'
            name='title'
            value={title}
            data-testid='title-input'
            onChange={handleChange}
          />
        </label>
        <label data-testid='subtitle-input-label'>
          Subtítulo
          <input
            type='text'
            name='subtitle'
            value={subtitle}
            onChange={handleChange}
            data-testid='subtitle-input'
          />
        </label>
        <label data-testid='image-input-label'>
          Imagem
          <input
            data-testid='image-input'
            type='text'
            name='imagePath'
            value={imagePath}
            onChange={handleChange}
          />
        </label>
      </div>
    );
  }
}

export default InfoNewCard1;
