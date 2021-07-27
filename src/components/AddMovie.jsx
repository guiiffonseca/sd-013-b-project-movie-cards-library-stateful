import React, { Component } from 'react';
import SubTitle from './source/SubTitle';
import Title from './source/Title';
import ImagePath from './source/ImagePath';
import StoryLine from './source/StoryLine';
import Rating from './source/Rating';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
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
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title valor={ title } funcao={ this.handleChange } />
        <SubTitle valor={ subtitle } funcao={ this.handleChange } />
        <ImagePath valor={ imagePath } funcao={ this.handleChange } />
        <StoryLine valor={ storyline } funcao={ this.handleChange } />
        <Rating valor={ rating } funcao={ this.handleChange } />

      </form>
    );
  }
}

export default AddMovie;
