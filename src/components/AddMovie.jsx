import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  /*
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    }
  } */
  render() {
    const { callBack } = this.props;
    return (
      <form data-testid="add-movie-form">
        <input type="text" onClick={ callBack } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  callBack: PropTypes.func.isRequired,
};

export default AddMovie;
