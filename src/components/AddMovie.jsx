import React from 'react';
import PropTypes from 'prop-types';
import TextArea from './TextArea';
import NewRating from './NewRating';
import Selected from './Selected';
import Botao from './Botao';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.OnChange = this.OnChange.bind(this);
    this.OnClick = this.OnClick.bind(this);
  }

  OnChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  OnClick() {
    const { onClick } = this.props;
    const { movie } = this.state;

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    onClick(movie);
  }

  render() {
    const { OnChange, OnClick } = this;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            name="title"
            value={ title }
            onChange={ OnChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            name="subtitle"
            value={ subtitle }
            onChange={ OnChange }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            name="imagePath"
            value={ imagePath }
            onChange={ OnChange }
          />
        </label>
        <TextArea OnChange={ OnChange } storyline={ storyline } />
        <NewRating OnChange={ OnChange } rating={ rating } />
        <Selected OnChange={ OnChange } genre={ genre } />
        <Botao onClick={ OnClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  subtile: PropTypes.string,
  title: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
  OnChange: PropTypes.func,
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
