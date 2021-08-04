import React from 'react';
import PropTypes from 'prop-types';
import InputSubtilte from './InputSubtilte';
import InputStoryLine from './storyLineInput';
import ImagePath from './ImagePath';
import InputRating from './InputRating';
import Genre from './Genre';
import InputTitle from './InputTitle';

const initialState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = initialState;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    // console.log(event);
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    // Array.from(document.querySelectorAll('input')).forEach(
    //   (input) => (input.value === ''),
    // );
    this.setState(initialState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form action="title" data-testid="add-movie-form">

        <InputTitle value={ title } onChange={ this.handleChange } />

        <InputSubtilte
          value={ subtitle }
          onChange={ this.handleChange }
        />

        <ImagePath value={ imagePath } onChange={ this.handleChange } />

        <InputStoryLine
          value={ storyline }
          onChange={ this.handleChange }
        />

        <InputRating
          value={ rating }
          onChange={ this.handleChange }
        />

        <Genre value={ genre } onChange={ this.handleChange } />

        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="send-button"

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
