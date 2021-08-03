// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import Subtitulo from './Subtitulo';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import RatingForm from './RatingForm';
import Genre from './Genre';

export default class AddMovie extends Component {
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
  }

handleChange = ({ target }) => this.setState({ [target.name]: target.value })

handleClick = (event) => {
  const { onClick } = this.props;
  event.preventDefault();
  onClick(this.state);
  this.setState({ subtitle: '',
    title: '',
    imagePath: '',
    storyline: '',
    rating: 0,
    genre: 'action',
  });
}

render() {
  const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
  return (
    <form data-testid="add-movie-form">
      <Title title={ title } handleChange={ this.handleChange } />
      <Subtitulo subtitle={ subtitle } handleChange={ this.handleChange } />
      <ImagePath imagePath={ imagePath } handleChange={ this.handleChange } />
      <Storyline storyline={ storyline } handleChange={ this.handleChange } />
      <RatingForm rating={ rating } handleChange={ this.handleChange } />
      <Genre genre={ genre } handleChange={ this.handleChange } />
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

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
