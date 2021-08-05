import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    render() {
      const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
      return (
        <form data-testid="add-movie-form">
          <LabelInput
            label="Título"
            id="title-input"
            value={ title }
            onChange={ this.handleChange }
          />
          <br />
          <LabelInput
            label="Subtítulo"
            id="subtitle-input"
            value={ subtitle }
            onChange={ this.handleChange }
          />
          <br />
          <LabelInput
            label="Imagem"
            id="image-input"
            value={ imagePath }
            onChange={ this.handleChange }
          />
          <br />
          <LabelInputTxtArea
            label="Sinopse"
            id="storyline-input"
            name="storyLine"
            value={ storyLine }
            onChange={ this.handleChange }
          />
          <LabelInput
            label="Avaliação"
            type="number"
            id="rating-input"
            value={ rating }
            onChange={ this.handleChange }
          />
          <SelectGenre
            label="Gênero"
            id="genre-input"
            name="genre"
            value={ genre }
            onChange={ this.handleChange }
          />
        </form>
      );
    }
  }
  
  export default AddMovie;

}
