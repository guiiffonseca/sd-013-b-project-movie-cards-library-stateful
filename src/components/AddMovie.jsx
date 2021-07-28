import React from 'react';

import PropTypes from 'prop-types';

import ImportText from './importText';
import ImportSubtitle from './importSubtitle';
import ImportImagePath from './importImagePath';
import ImportStoryline from './importStoryline';
import ImportRating from './importRating';
import ImportGenre from './importGenre';

export default class AddMovie extends React.Component {
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

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  buttonAddFilme = () => {
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
      <form data-testid="add-movie-form">
        <ImportText title={ title } handleChange={ this.handleChange } />
        <ImportSubtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <ImportImagePath imagePath={ imagePath } handleChange={ this.handleChange } />
        <ImportStoryline storyline={ storyline } handleChange={ this.handleChange } />
        <ImportRating rating={ rating } handleChange={ this.handleChange } />
        <ImportGenre genre={ genre } handleChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.buttonAddFilme }
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
