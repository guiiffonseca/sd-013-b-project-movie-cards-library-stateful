import React from 'react';
import PropTypes from 'prop-types';

export default class ImgPath extends React.Component {
  render() {
    const { value, callBack } = this.props;
    return (
      <label htmlFor="imgPath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          onChange={ callBack }
          value={ value }
          name="imagePath"
        />
      </label>
    );
  }
}

ImgPath.propTypes = {
  value: PropTypes.string.isRequired,
  callBack: PropTypes.func.isRequired,
};
