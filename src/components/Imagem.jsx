import React from 'react';
import PropTypes from 'prop-types';

class Imagem extends React.Component {
  render() {
    const { imagePath, onChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imagemPath">
        Imagem
        <input
          data-testid="image-input"
          name="imagemPath"
          value={ imagePath }
          id="imagePath"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Imagem.propTypes = {
  imagePath: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Imagem;
