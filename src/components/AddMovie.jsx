import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeSubtitle = this.handleChangeSubtitle.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleChangeSubtitle(event) {
    this.setState({
      subtitle: event.target.value,
    });
  }

  handleChangeImage(event) {
    this.setState({
      imagePath: event.target.value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    // const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="titleInput">
          Título
          <input
            data-testid="title-input"
            type="text"
            value={ title }
            onChange={ this.handleChangeTitle }
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitleInput">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            value={ subtitle }
            onChange={ this.handleChangeSubtitle }
          />
        </label>

        <label data-testid="image-input-label" htmlFor="imageInput">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            value={ imagePath }
            onChange={ this.handleChangeImage }
          />
        </label>
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
