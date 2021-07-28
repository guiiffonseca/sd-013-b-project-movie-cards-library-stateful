import React from 'react';
import PropTypes from 'prop-types';

class AddImagem extends React.Component {
  render() {
    const { value, funcao } = this.props;
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

AddImagem.propTypes = {
  value: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};

export default AddImagem;
