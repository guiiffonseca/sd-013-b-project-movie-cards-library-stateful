import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import InputRating from './InputRating';
import Genre from './Genre';
import Button from './Button';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleOnChange = this.handleOnChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
  }

  handleOnChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  // @mariananogueirab me deu a dica de usar arrow function para não precisar utilizar o bind.
  handleClick = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle title={ title } handleOnChange={ this.handleOnChange } />
        <InputSubtitle subtitle={ subtitle } handleOnChange={ this.handleOnChange } />
        <ImagePath imagePath={ imagePath } handleOnChange={ this.handleOnChange } />
        <Storyline storyline={ storyline } handleOnChange={ this.handleOnChange } />
        <InputRating rating={ rating } handleOnChange={ this.handleOnChange } />
        <Genre genre={ genre } handleOnChange={ this.handleOnChange } />
        <Button onClick={ this.handleClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
