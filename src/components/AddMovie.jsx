import React from 'react';
import PropTypes from 'prop-types';
import AddMovieTitle from './addMovieComponents/AddMovieTitle';
import AddMovieSubtitle from './addMovieComponents/AddMovieSubtitle';
import AddMovieImg from './addMovieComponents/AddMovieImg';
import AddMovieStoryline from './addMovieComponents/AddMovieStoryline';
import AddMovieRating from './addMovieComponents/AddMovieRating';
import AddMovieGenre from './addMovieComponents/AddMovieGenre';

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
    // this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick = (event) => {
    const { onClick } = this.props;
    event.preventDefault();
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
      <form action="" data-testid="add-movie-form">
        <fieldset>

          <AddMovieTitle value={ title } onChange={ this.handleChange } />
          <AddMovieSubtitle value={ subtitle } onChange={ this.handleChange } />
          <AddMovieImg
            value={ imagePath }
            onChange={ (event) => this.setState({ imagePath: event.target.value }) }
          />
          <AddMovieStoryline value={ storyline } onChange={ this.handleChange } />
          <AddMovieRating value={ rating } onChange={ this.handleChange } />
          <AddMovieGenre value={ genre } onChange={ this.handleChange } />
          <button
            type="button"
            data-testid="send-button"
            onClick={ this.handleClick }
          >
            Adicionar filme
          </button>
        </fieldset>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
