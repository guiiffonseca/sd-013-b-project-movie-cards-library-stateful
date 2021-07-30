// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import TextLabel from './TextLabel';
import ImageLabel from './ImageLabel';
import NumberLabel from './NumberLabel';
import SelectLabel from './SelectLabel';

class AddMovies extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    this.setState(
      { [event.target.name]: event.target.value },
    );
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const {
      subtitle, title, imagePath, storyLine, rating, genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TextLabel
          prop={ title }
          name="title"
          label="Título"
          onChange={ this.handleChange }
        />
        <TextLabel
          prop={ subtitle }
          name="subtitle"
          label="Subtítulo"
          onChange={ this.handleChange }
        />
        <ImageLabel
          prop={ imagePath }
          name="imagePath"
          id="image"
          label="Imagem"
          onChange={ this.handleChange }
        />
        <ImageLabel
          prop={ storyLine }
          name="storyLine"
          id="storyline"
          label="Sinopse"
          onChange={ this.handleChange }
        />
        <NumberLabel
          prop={ rating }
          name="rating"
          label="Avaliação"
          onChange={ this.handleChange }
        />
        <SelectLabel prop={ genre } onChange={ this.handleChange } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.handleClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovies.propTypes = {
  onClick: PropTypes.func,
};

AddMovies.defaultProps = {
  onClick: () => {},
};

export default AddMovies;
