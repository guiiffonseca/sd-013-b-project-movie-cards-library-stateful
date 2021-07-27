// implement AddMovie component here
import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } onChange={ this.handleChange } />
        <Subtitle title={ subtitle } onChange={ this.handleChange } />
        <ImagePath title={ imagePath } onChange={ this.handleChange } />
        <Storyline title={ storyline } onChange={ this.handleChange } />
      </form>
    );
  }
}
