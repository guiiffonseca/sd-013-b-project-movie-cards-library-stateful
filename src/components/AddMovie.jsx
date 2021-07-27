// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Title from './AddMoviesInputs/Title';
import Subtitle from './AddMoviesInputs/Subtitle';
import ImagePath from './AddMoviesInputs/ImagePath';
import Storyline from './AddMoviesInputs/Storyline';
import Rating from './AddMoviesInputs/Rating';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action' };
  }

  onInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const s = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Title value={ s.title } onChange={ this.onInputChange } />
          <Subtitle value={ s.subtitle } onChange={ this.onInputChange } />
          <ImagePath value={ s.imagePath } onChange={ this.onInputChange } />
          <Storyline value={ s.storyline } onChange={ this.onInputChange } />
          <Rating value={ s.rating } onChange={ this.onInputChange } />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,

};

export default AddMovie;
