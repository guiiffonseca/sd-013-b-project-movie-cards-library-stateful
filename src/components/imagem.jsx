import React from 'react';
import PropTypes from 'prop-types';

class Imagem extends React.Component {
  render() {
    const { imagePath, onChange } = this.props;
    return (
      <label htmlFor="imagem" data-testid="image-input-label">
        Imagem
        <input
          id="imagem"
          name="imagem"
          type="text"
          data-testid="image-input"
          value={ imagePath }
          onChange={ onChange }
        />
      </label>
    );
  }
}
Imagem.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Imagem;
