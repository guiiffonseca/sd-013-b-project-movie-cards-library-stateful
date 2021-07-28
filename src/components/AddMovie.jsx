import React from 'react';
import PropTypes from 'prop-types';
import AddTitle from './AddTitle';
import AddSubtitle from './AddSubtitle';
import AddImage from './AddImage';
import AddRating from './AddRating';
import AddGenre from './AddGenre';
import AddStoryline from './AddStoryline';

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
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddTitle handleChange={ this.handleChange } title={ title } />

        <AddSubtitle handleChange={ this.handleChange } subtitle={ subtitle } />

        <AddImage handleChange={ this.handleChange } imagePath={ imagePath } />

        <AddStoryline handleChange={ this.handleChange } imagePath={ storyline } />

        <AddRating handleChange={ this.handleChange } rating={ rating } />

        <AddGenre handleChange={ this.handleChange } genre={ genre } />

        <button type="submit" data-testid="send-button" onClick={ onClick }>
          Adicionar Filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
