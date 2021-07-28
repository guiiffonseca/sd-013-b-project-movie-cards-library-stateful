import React from 'react';
import PropTypes from 'prop-types';

import Title from './AddMovieComponents/Title';
import Subtitle from './AddMovieComponents/Subtitle';
import Image from './AddMovieComponents/Image';
import Sinopse from './AddMovieComponents/Sinopse';
import Rating from './AddMovieComponents/Rating';
import Genre from './AddMovieComponents/Genre';

class AddMovie extends React.Component {
  // handleSubmit = () => {
  //   console.log('eita');
  // }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Title />
        <Subtitle />
        <Image />
        <Sinopse />
        <Rating />
        <Genre />
        <button
          data-testid="send-button"
          type="submit"
          onClick={ onClick }
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

export default AddMovie;
