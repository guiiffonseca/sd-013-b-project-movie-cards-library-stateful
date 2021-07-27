import React from 'react';
import PropTypes from 'prop-types';

import Title from './title';
import Subtitle from './subtitle';
import Image from './image';
import Storyline from './storyline';
import Rating from './rating';
import Genre from './genre';

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

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Title value={ title } handleOnChange={ this.handleOnChange } />
        <Subtitle value={ subtitle } handleOnChange={ this.handleOnChange } />
        <Image value={ imagePath } handleOnChange={ this.handleOnChange } />
        <Storyline value={ storyline } handleOnChange={ this.handleOnChange } />
        <Rating value={ rating } handleOnChange={ this.handleOnChange } />
        <Genre value={ genre } handleOnChange={ this.handleOnChange } />

        <button
          type="button"
          data-testid="send-button"
        >
          Adicionar Filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
