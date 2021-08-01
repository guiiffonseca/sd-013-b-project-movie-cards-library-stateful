import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  // this.state = {
  //   title: '',
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
  render() {
    const { titleValue, onTitleChange, subtitleValue, onSubtitleChange } = this.props;
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
          <input type="text" />
        </label>
        {/* inpuy initial value by imagePath */}
        {/* input id: data-testid="image-input"  */}
        {/* onChange on input add to imagemPAth the current path of the image */}
      </form>
    );
  }
}

AddMovie.propTypes = {
  titleValue: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  subtitleValue: PropTypes.string.isRequired,
  onSubtitleChange: PropTypes.func.isRequired,
};

// AddMovie.defaultProps = {
//   titleValue: 'undefined',
//   onTitleChange: 'undefined',
// };
