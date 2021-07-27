import React, { Component } from 'react';
import SubTitle from './input/Subtitle';
import Title from './input/Title';
import ImagePath from './input/ImagePath';
import StoryLine from './input/StoryLine';
import Rating from './input/Rating';
import Genre from './input/Genre';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    const { name } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title valor={ title } funcao={ this.handleChange } />
        <SubTitle valor={ subtitle } funcao={ this.handleChange } />
        <ImagePath valor={ imagePath } funcao={ this.handleChange } />
        <StoryLine valor={ storyline } funcao={ this.handleChange } />
        <Rating valor={ rating } funcao={ this.handleChange } />
        <Genre valor={ genre } funcao={ this.handleChange } />

      </form>
    );
  }
}

export default AddMovie;