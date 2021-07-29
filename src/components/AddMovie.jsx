import React from 'react';
import PropTypes from 'prop-types';
import AddMovieTitle from './AddMovieComponents/AddMovieTitle';
import AddMovieSubtitle from './AddMovieComponents/AddMovieSubtitle';
import AddMovieImagePath from './AddMovieComponents/AddMovieImagePath';
import AddMovieStoryline from './AddMovieComponents/AddMovieStoryline';
import AddMovieRating from './AddMovieComponents/AddMovieRating';
import AddMovieGenre from './AddMovieComponents/AddMovieGenre';

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
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  onHandleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      [event.target.name]: event.target.value,
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
      <form onSubmit={ this.onHandleClick } className="form" data-testid="add-movie-form">
        <AddMovieTitle value={ title } onChange={ this.handleChange } />
        <AddMovieSubtitle value={ subtitle } onChange={ this.handleChange } />
        <AddMovieImagePath value={ imagePath } onChange={ this.handleChange } />
        <AddMovieStoryline value={ storyline } onChange={ this.handleChange } />
        <AddMovieRating value={ rating } onChange={ this.handleChange } />
        <AddMovieGenre value={ genre } onChange={ this.handleChange } />
        <button type="submit" data-testid="send-button" onClick={ this.onHandleClick }>
          Adicionar filme
        </button>
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
