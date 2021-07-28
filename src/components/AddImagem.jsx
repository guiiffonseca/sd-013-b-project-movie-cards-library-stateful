import React from 'react';

class AddImagem extends React.Component {
  render() {
    const { value } = this.props;
    const { funcao } = this.props;
    return (
      <label htmlFor="imagem" data-testid="image-input-label">
        Imagem
        <input
          id="imagem"
          type="text"
          value={ value }
          name="imagePath"
          data-testid="image-input"
          onChange={ funcao }
        />
      </label>
    );
  }
}

export default AddImagem;
