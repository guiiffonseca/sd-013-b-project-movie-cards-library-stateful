import React from 'react';
import subtitleInput from './subtitleInput';
import titleInput from './titleInput';
import storyLine from './storyLine';
import ImagePath from './ImagePath';
import RatingInput from './RatingInput';

export default class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    // console.log(event);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">

        <titleInput value={ title } onChange={ this.handleChange } />

        <subtitleInput value={ subtitle } onChange={ this.handleChange } />

        <ImagePath value={ imagePath } onChange={ this.handleChange } />

        <storyLine value={ storyline } onChange={ this.handleChange } />

        <RatingInput value={ rating } onChange={ this.handleChange } />

      </form>
    );
  }
}
