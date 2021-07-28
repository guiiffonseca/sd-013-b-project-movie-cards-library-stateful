import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './title';
import Subtitle from './subtitle';
import ImagePath from './imagePath';
import Storyline from './storyLine';
import RatingInput from './ratingInput';
import Genre from './genre';

class AddMovie extends Component {
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

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  }

  atualizarEstado = () => {
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
      <div>
        <form data-testid="add-movie-form">
          <Subtitle
            value={ subtitle }
            onChange={ this.handleChange }
          />
          <Title
            value={ title }
            onChange={ this.handleChange }
          />
          <ImagePath
            value={ imagePath }
            onChange={ this.handleChange }
          />
          <Storyline
            value={ storyline }
            onChange={ this.handleChange }
          />
          <RatingInput
            value={ rating }
            onChange={ this.handleChange }
          />
          <Genre
            value={ genre }
            onChange={ this.handleChange }
          />
          <button
            type="submit"
            onClick={ this.atualizarEstado }
            data-testid="send-button"
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
