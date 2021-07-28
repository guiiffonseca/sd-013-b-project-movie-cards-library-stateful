import React from 'react';
import PropTypes from 'prop-types';
import InputNumber from './InputNumber';
import Input from './Input';

class Test extends React.Component {
  render() {
    const { value, onChange } = this.props;
    const [subtitle, title, imagePath, rating] = value;
    return (
      <div>
        <Input
          id="title-input"
          labelTest="title-input-label"
          label="Título"
          name="title"
          value={ title }
          onChange={ onChange }
        />
        <Input
          id="subtitle-input"
          labelTest="subtitle-input-label"
          label="Subtítulo"
          name="subtitle"
          value={ subtitle }
          onChange={ onChange }
        />
        <Input
          id="image-input"
          labelTest="image-input-label"
          label="Imagem"
          name="imagePath"
          value={ imagePath }
          onChange={ onChange }
        />
        <InputNumber
          id="rating-input"
          labelTest="rating-input-label"
          label="Avaliação"
          value={ rating }
          onChange={ onChange }
          name="rating"
        />
      </div>
    );
  }
}

Test.propTypes = {
  onChange: PropTypes.func
    .isRequired,
  value: PropTypes.string
    .isRequired,
};

export default Test;
