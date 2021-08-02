import React from 'react';
import PropTypes from 'prop-types';
import InputRating from './subcomponents/InputRating';
import Title from './subcomponents/Title';
import Subtitle from './subcomponents/Subtitle';
import Storyline from './subcomponents/Storyline';
import Image from './subcomponents/Image';
import Genre from './subcomponents/Genre';
import Button from './subcomponents/Button';

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
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  };

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Title title={ title } onChange={ this.handleChange } />
          <Subtitle subtitle={ subtitle } onChange={ this.handleChange } />
          <Image imagePath={ imagePath } onChange={ this.handleChange } />
          <Storyline storyline={ storyline } onChange={ this.handleChange } />
          <InputRating rating={ rating } onChange={ this.handleChange } />
          <Genre genre={ genre } onChange={ this.handleChange } />
          <Button onClick={ this.handleClick } />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
