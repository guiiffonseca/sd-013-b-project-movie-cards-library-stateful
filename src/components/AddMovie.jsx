import React from 'react';
import InputSubtilte from './InputSubtilte';
import InputStoryLine from './storyLineInput';
import ImagePath from './ImagePath';
import InputRating from './InputRating';
import Genre from './Genre';
import InputTitle from './InputTitle';

export default class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      ValorRating: 0,
      genre: '',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    // console.log(event);
  }

  render() {
    const { title, subtitle, imagePath, storyline, ValorRating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">

        <InputTitle value={ title } name="title" onChange={ this.handleChange } />

        <InputSubtilte
          value={ subtitle }
          name="subtitle"
          onChange={ this.handleChange }
        />

        <ImagePath value={ imagePath } name="imagePath" onChange={ this.handleChange } />

        <InputStoryLine
          value={ storyline }
          name="storyline"
          onChange={ this.handleChange }
        />

        <InputRating value={ ValorRating } name="rating" onChange={ this.handleChange } />

        <Genre value={ genre } name="genre" onChange={ this.handleChange } />

      </form>
    );
  }
}
