import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class CampoInputs extends React.Component {
  render() {
    const { title, subtitle, imagePath, func, rating } = this.props;
    return (
      <div>
        <Input
          texto="Título"
          value={ title }
          nome="title"
          tipo="text"
          id="add"
          dataID="title-input"
          func={ func }
          idLabel="title-input-label"
        />
        <Input
          texto="Subtítulo"
          value={ subtitle }
          nome="subtitle"
          tipo="text"
          id="addSub"
          dataID="subtitle-input"
          func={ func }
          idLabel="subtitle-input-label"
        />
        <Input
          texto="Imagem"
          value={ imagePath }
          nome="imagePath"
          tipo="text"
          id="addimg"
          dataID="image-input"
          func={ func }
          idLabel="image-input-label"
        />
        <Input
          texto="Avaliação"
          value={ rating }
          nome="rating"
          tipo="number"
          id="addNum"
          dataID="rating-input"
          func={ func }
          idLabel="rating-input-label"
        />

      </div>
    );
  }
}
CampoInputs.propTypes = {

  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  rating: PropTypes.string.isRequired,
};
export default CampoInputs;