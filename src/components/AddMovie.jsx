import React from 'react';
import PropTypes from 'prop-types';

import TxtCp from './TxtCp';
import SlctCp from './SlctCp';
import LblCpnt from './LblCpnt';
import LblRating from './LblRating';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox'
      ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const { onClick } = this.props;
    onClick(this.state);
    event.preventDefault();
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <LblCpnt
          text="Título"
          dataTestType="title-input-label"
          type="text"
          id="titulo-input"
          name="title"
          value={ title }
          dataTestId="title-input"
          onChange={ this.handleChange }
        />
        <LblCpnt
          text="Subtítulo"
          dataTestType="subtitle-input-label"
          type="text"
          id="subtitulo-input"
          name="subtitle"
          value={ subtitle }
          dataTestId="subtitle-input"
          onChange={ this.handleChange }
        />
        <LblCpnt
          text="Imagem"
          dataTestType="image-input-label"
          type="text"
          id="imagem"
          name="imagePath"
          value={ imagePath }
          dataTestId="image-input"
          onChange={ this.handleChange }
        />
        <TxtCp value={ storyline } onChange={ this.handleChange } />
        <LblRating value={ rating } onChange={ this.handleChange } />
        <SlctCp value={ genre } onChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleSubmit }
        >
          Adicionar filmes
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
