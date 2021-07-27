// implement AddMovie component here
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import Rating from './NumberRating';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      // genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } onChange={ this.handleChange } />
        <Subtitle subtitle={ subtitle } onChange={ this.handleChange } />
        <ImagePath imagePath={ imagePath } onChange={ this.handleChange } />
        <Storyline storyline={ storyline } onChange={ this.handleChange } />
        <Rating rating={ rating } onChange={ this.handleChange } />
      </form>
    );
  }
}
