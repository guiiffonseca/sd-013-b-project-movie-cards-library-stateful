import React, { Component } from 'react';
import propTypes from 'prop-types';
import InputTitle from './inputs/inputTitle';
import InputSubtitle from './inputs/InputSubtitle';
import InputImage from './inputs/InputImage';
import InputStoryline from './inputs/InputStoryline';
import InputRating from './inputs/InputRating';

export default class AddMovie extends Component {
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
  }

  handleChange= ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    console.log( this.state.rating );
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } onChange={ this.handleChange } />
        <InputSubtitle value={ subtitle } onChange={ this.handleChange } />
        <InputImage value={ imagePath } onChange={ this.handleChange } />
        <InputStoryline value={ storyline } onChange={ this.handleChange } />
        <InputRating value={ rating } onChange={ this.handleChange } />

      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: propTypes.func.isRequired,
};
