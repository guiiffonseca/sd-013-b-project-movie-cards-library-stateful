import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      genre: 'action',
      imagePath: '',
      rating: 0,
      storyLine: '',
      subtitle: '',
      title: '',
    };
  }

  render() {
    const {
      genre,
      imagePath,
      rating,
      storyLine,
      subtitle,
      title,
    } = this.state;

    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        {
          console.log(
            onClick,
            genre,
            imagePath,
            rating,
            storyLine,
            subtitle,
            title,
          )
        }

      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
