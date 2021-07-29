import React from 'react';
import PropTypes from 'prop-types';
import AddMovieTitle from './AddMovieComponents/AddMovieTitle';
import AddMovieSubtitle from './AddMovieComponents/AddMovieSubtitle';
import AddMovieImagePath from './AddMovieComponents/AddMovieImagePath';
import AddMovieStoryline from './AddMovieComponents/AddMovieStoryline';
import AddMovieRating from './AddMovieComponents/AddMovieRating';
import AddMovieGenre from './AddMovieComponents/AddMovieGenre';
import AddMovieButton from './AddMovieComponents/AddMovieButton';

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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form className="form" data-testid="add-movie-form">
        <AddMovieTitle value={ title } onChange={ this.handleChange } />
        <AddMovieSubtitle value={ subtitle } onChange={ this.handleChange } />
        <AddMovieImagePath value={ imagePath } onChange={ this.handleChange } />
        <AddMovieStoryline value={ storyline } onChange={ this.handleChange } />
        <AddMovieRating value={ rating } onChange={ this.handleChange } />
        <AddMovieGenre value={ genre } onChange={ this.handleChange } />
        <AddMovieButton onClick={ this.handleClick } />
      </form>
    );
  }
}

AddMovie.propTypes = ({
  subtitle: PropTypes.string,
  title: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
  onClick: PropTypes.func,
}).isRequired;

export default AddMovie;
