import React from 'react';
import InportText from './inportText';
import InportSubtitle from './inportSubtitle';
import InportImagePath from './inportImagePath';
import InportStoryline from './inportStoryline';
import InportRating from './inportRating';
import InportGenre from './inportGenre';

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
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    /* const { onclick } = this.props; */
    return (
      <form data-testid="add-movie-form">
        <InportText title={ title } handleChange={ this.handleChange } />
        <InportSubtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <InportImagePath imagePath={ imagePath } handleChange={ this.handleChange } />
        <InportStoryline imagePath={ storyline } handleChange={ this.handleChange } />
        <InportRating imagePath={ rating } handleChange={ this.handleChange } />
        <InportGenre imagePath={ genre } handleChange={ this.handleChange } />
      </form>
    );
  }
}
