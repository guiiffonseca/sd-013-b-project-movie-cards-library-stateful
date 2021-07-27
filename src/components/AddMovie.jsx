import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(_props) {
    super();

    this.state = {
      genre: 'action',
      imagePath: '',
      rating: 0,
      storyLine: '',
      subtitle: '',
      title: '',
    }
  }

  render() {
    return (
      <h1>AddMovie</h1>
    )
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}

export default AddMovie;
