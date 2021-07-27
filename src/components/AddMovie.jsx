import React from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }

  render() {
    const { onClick } = this.props;
    return (
      <h1>{ onClick }</h1>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
