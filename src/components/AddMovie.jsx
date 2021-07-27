// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'Action',
    };
  }

  render() {
    const { onClick } = this.props;
    return(<div/>);
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
