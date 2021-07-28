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

  handleSubmit() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <LblCpnt
          text="Título"
          dataTestType="title-input-label"
          type="text"
          id="titulo-input"
          name="title"
          value={ title }
          dataTestId="title-input"
          onChange={ this.handleSubmit }
        />
        <LblCpnt
          text="Subtítulo"
          dataTestType="subtitle-input-label"
          type="text"
          id="subtitulo-input"
          name="subtitle"
          value={ subtitle }
          dataTestId="subtitle-input"
          onChange={ this.handleSubmit }
        />
        <LblCpnt
          text="Imagem"
          dataTestType="image-input-label"
          type="text"
          id="imagem"
          name="imagePath"
          value={ imagePath }
          dataTestId="image-input"
          onChange={ this.handleSubmit }
        />
        <TxtCp value={ storyline } onChange={ this.handleSubmit } />
        <LblRating value={ rating } onChange={ this.handleSubmit } />
        <SlctCp value={ genre } onChange={ this.handleSubmit } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ onClick }
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
