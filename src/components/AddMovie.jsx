import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import InputRating from './InputRating';
import Genre from './Genre';
import SubmitButton from './SubmitButton';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    onClick();
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          <Title title={ title } onChange={ this.handleChange } />
          <Subtitle subtitle={ subtitle } onChange={ this.handleChange } />
          <ImagePath imagePath={ imagePath } onChange={ this.handleChange } />
          <Storyline storyline={ storyline } onChange={ this.handleChange } />
          <InputRating rating={ rating } onChange={ this.handleChange } />
          <Genre genre={ genre } onChange={ this.handleChange } />
          <SubmitButton onClick={ this.handleSubmit } />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
