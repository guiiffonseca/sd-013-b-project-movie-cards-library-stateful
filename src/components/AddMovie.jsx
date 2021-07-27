import React, { Component } from 'react';
import propTypes from 'prop-types';
import InputTitle from './inputs/inputTitle';

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
    console.log(name, value)
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } onChange={ this.handleChange } />

      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: propTypes.func.isRequired,
};
