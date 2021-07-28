// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import SubTitle from './SubTitle';
import ImagePath from './ImagePath';
import RatingLabel from './RatingLabel';
import Genre from './Genre';
import StoryLine from './StoryLine';

export default class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'Action',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
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
      storyLine: '',
      rating: 0,
      genre: 'Action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } funcao={ this.handleChange } />
        <SubTitle value={ subtitle } funcao={ this.handleChange } />
        <ImagePath value={ imagePath } funcao={ this.handleChange } />
        <StoryLine value={ storyLine } funcao={ this.handleChange } />
        <RatingLabel value={ rating } funcao={ this.handleChange } />
        <Genre value={ genre } funcao={ this.handleChange } />
        <button type="submit" data-testid="send-button" onClick={ this.handleClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
