import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  // this.state = {
  //    title: '',
  //    subtitle: '',
  //    imagePath: '',
  // };
  //  onTitleChange({ target }) {
  //  this.setState({
  //  title: target.value
  // });
  // }
  //  onSubtitleChange({ target }) {
  //  this.setState({
  //  subtitle: target.value
  // });
  // }
  // onImagePathChange ({ target }) {
  //  this.setState({
  //  imagePath: target.value
  // });
  // }

  render() {
    const {
      titleValue,
      onTitleChange,
      subtitleValue,
      onSubtitleChange,
      imagePathValue,
      onImagePathChange,
    } = this.props;
    return (
      <form htmlFor="true" data-testid="add-movie-form">
        <label htmlFor="true" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            value={ titleValue }
            onChange={ onTitleChange }
          />
        </label>
        <label htmlFor="true" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            value={ subtitleValue }
            onChange={ onSubtitleChange }
          />
        </label>
        <label htmlFor="true" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            value={ imagePathValue }
            onChange={ onImagePathChange }
          />
        </label>
        <label htmlFor="true" data-testid="storyline-input-label">
          Sinopse
          {/* <textarea value={ storylineValue } ></textarea> */}
        </label>
        {/* textarea associated with an label with tex "Sinopse" */}
        {/* label w id: data-testid="storyline-input-label" */}
        {/* textarea initial value defined by prop storylineValue */}
        {/* textarea w id: data-testid="storyline-input" */}
        {/* prop onChange w onChange synopsis */}
      </form>
    );
  }
}

AddMovie.propTypes = {
  titleValue: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  subtitleValue: PropTypes.string.isRequired,
  onSubtitleChange: PropTypes.func.isRequired,
  imagePathValue: PropTypes.string.isRequired,
  onImagePathChange: PropTypes.func.isRequired,
};

// AddMovie.defaultProps = {
//   titleValue: 'undefined',
//   onTitleChange: 'undefined',
// };
