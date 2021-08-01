import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';

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
  // onSynopsisChange({ target }) {
  //  this.setState({
  //  storyline: target.value
  // });
  // }

  render() {
    const {
      titleValue,
      handleChange,
      subtitleValue,
      imagePathValue,
      storylineValue,
    } = this.props;
    return (
      <form htmlFor="true" data-testid="add-movie-form">
        <TitleInput titleValue={ titleValue } handleChange={ handleChange } />
        <label htmlFor="true" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            value={ subtitleValue }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="true" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            value={ imagePathValue }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="true" data-testid="storyline-input-label">
          Sinopse
          <textarea
            value={ storylineValue }
            data-testid="storyline-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="true" data-testid="rating-input-label">
          Avaliação
          <input type="text" />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  titleValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  subtitleValue: PropTypes.string.isRequired,
  imagePathValue: PropTypes.string.isRequired,
  storylineValue: PropTypes.string.isRequired,
};

// AddMovie.defaultProps = {
//   titleValue: 'undefined',
//   onTitleChange: 'undefined',
// };
