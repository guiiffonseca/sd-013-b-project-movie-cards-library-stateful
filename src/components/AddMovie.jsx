import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    const movie = this.props;
    const { title, subtitle, imagePath, storyline } = movie;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título:
          <input
            type="text"
            name="text"
            id="text"
            value={ this.title }
            data-testid="title-input"
            onChange={ title }
          />
        </label>

        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo:
          <input 
          type="text"
          value={ this.subtitle }
          onChange={ subtitle }
          data-testid="subtitle-input"
          />
        </label>

        <label htmlFor="subtitle" data-testid="image-input-label">
          Imagem:
          <input 
          type="text"
          value={ this.imagePath }
          onChange={ imagePath }
          data-testid="image-input"
          />
        </label>

        <label htmlFor="subtitle" data-testid="storyline-input-label">
          Sinopse:
          <textarea 
          type="text"
          value={ this.storyline }
          onChange={ storyline }
          data-testid="storyline-input"
          />
        </label>

      </form>
    );
  }
}

AddMovie.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
};


export default AddMovie;
