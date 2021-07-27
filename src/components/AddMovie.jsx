import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    };
  }

  render() {
    const { onClick } = this.props;
    return (
      <span> teste </span>
    );
  }
}

AddMovie.propTypes = {
  onClick: propTypes.func.isRequired,
};
