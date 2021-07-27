import React from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import StoryLine from './StoryLine';
import RatingForms from './RatingForms';
import Genre from './Genre';

class AddMovie extends React.Component {
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

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState(() => ({
      [id]: value,
    }));
  };

  addNewMovie = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
  };

  render() {
    const { title,
      subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } handleChange={ this.handleChange } />
        <Subtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <Image imagePath={ imagePath } handleChange={ this.handleChange } />
        <StoryLine storyline={ storyline } handleChange={ this.handleChange } />
        <RatingForms rating={ rating } handleChange={ this.handleChange } />
        <Genre genre={ genre } handleChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.addNewMovie }
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
