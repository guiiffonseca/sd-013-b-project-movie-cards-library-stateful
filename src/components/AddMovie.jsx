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
    this.hdCg = this.hdCg.bind(this);
    this.hdSbt = this.hdSbt.bind(this);
  }

  hdCg({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox'
      ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  hdSbt() {
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
      <form data-testid="add-movie-form" onSubmit={ this.hdSbt }>
        <LblCpnt
          text="Título"
          dataTestType="title-input-label"
          type="text"
          id="titulo-input"
          name="title"
          value={ title }
          dataTestId="title-input"
          onChange={ this.hdCg }
        />
        <LblCpnt
          text="Subtítulo"
          dataTestType="subtitle-input-label"
          type="text"
          id="subtitulo-input"
          name="subtitle"
          value={ subtitle }
          dataTestId="subtitle-input"
          onChange={ this.hdCg }
        />
        <LblCpnt
          text="Imagem"
          dataTestType="image-input-label"
          type="text"
          id="imagem"
          name="imagePath"
          value={ imagePath }
          dataTestId="image-input"
          onChange={ this.hdCg }
        />
        <TxtCp value={ storyline } onChange={ this.hdCg } />
        <LblRating value={ rating } onChange={ this.hdCg } />
        <SlctCp value={ genre } onChange={ this.hdCg } />
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
