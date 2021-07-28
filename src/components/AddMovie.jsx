// implement AddMovie component here

import React from 'react';
import PropTypes from 'prop-types';
import InFormat from './InputTextFormat';
import InputAreaTextFormat from './InputTextAreaFormat';
import SelectFormat from './SelectFormat';

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
    this.handle = this.handle.bind(this);
  }

  handle({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.obj = this.state;
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;

    // array.push(obj);
    return (
      <form action="" data-testid="add-movie-form">
        <InFormat n="title" t="Título" ty="text" h={ this.handle } s={ title } />
        <InFormat n="subtitle" t="Subtítulo" ty="text" h={ this.handle } s={ subtitle } />
        <InFormat n="imagePath" t="Imagem" ty="text" h={ this.handle } s={ imagePath } />
        <InputAreaTextFormat
          name="storyline"
          text="Sinopse"
          handle={ this.handle }
          state={ storyline }
        />
        <InFormat n="rating" t="Avaliação" ty="number" h={ this.handle } s={ rating } />
        <SelectFormat
          name="genre"
          text="Gênero"
          handle={ this.handle }
          state={ genre }
        />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ onClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
