import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SubTitle from './source/SubTitle';
import Title from './source/Title';
import ImagePath from './source/ImagePath';
import StoryLine from './source/StoryLine';
import Rating from './source/Rating';
import Genre from './source/Genre';

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
    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    const { name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  reset(event, funcao) {
    event.preventDefault();
    funcao(this.state);
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Title valor={ title } funcao={ this.handleChange } />
        <SubTitle valor={ subtitle } funcao={ this.handleChange } />
        <ImagePath valor={ imagePath } funcao={ this.handleChange } />
        <StoryLine valor={ storyline } funcao={ this.handleChange } />
        <Rating valor={ rating } funcao={ this.handleChange } />
        <Genre valor={ genre } funcao={ this.handleChange } />

        <button
          data-testid="send-button"
          onClick={ (event) => { this.reset(event, onClick); } }
          type="submit"
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
