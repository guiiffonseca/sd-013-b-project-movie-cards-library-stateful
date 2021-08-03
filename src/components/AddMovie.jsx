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

handleClick = () => {
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
  const { onClick } = this.props;
  return (
    <form data-testid="add-movie-form">
      <Title title={ title } callback={ handleChange } />
      <Subtitulo subtitle={ subtitle } callback={ handleChange } />
      <ImagePath imagePath={ imagePath } callback={ handleChange } />
      <Storyline storyline={ storyline } callback={ handleChange } />
      <RatingForm rating={ rating } callback={ handleChange } />
      <Genre genre={ genre } callback={ handleChange } />
      <button
        type="button"
        onSubmit={ onClick }
        data-testid="send-button"
        onClick={ handleClick }
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
