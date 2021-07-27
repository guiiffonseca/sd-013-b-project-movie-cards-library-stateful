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
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    const { name } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
  })};

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } onChange={ this.handleChange } />
        <SubTitle value={ subtitle } onChange={ this.handleChange } />
        <ImagePath value={ imagePath } onChange={ this.handleChange } />
        <StoryLine value={ storyline } onChange={ this.handleChange } />
        <Rating value={ rating } onChange={ this.handleChange } />
        <Genre value={ genre } onChange={ this.handleChange } />
        <button type="button"
        data-testid="send-button"
        onClick={this.handleClick}
        >Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;