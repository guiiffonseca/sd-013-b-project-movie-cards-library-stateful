import React from 'react';
import PropTypes from 'prop-types';

export default class Title extends React.Component {
  render() {
    const { value, funcao } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          name="imagePath"
          id="imagePath"
          data-testid="image-input"
          value={ value }
          onChange={ funcao }
        />
      </label>
    );
  }
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};
