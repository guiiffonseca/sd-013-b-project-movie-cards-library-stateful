import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubTitle from './InputSubTitle';
import ImagePath from './ImagePath';
import TextAreaSynopsis from './TextAreaSynopsis';
import InputRating from './InputRating';
import SelectGenre from './SelectGenre';
import ButtonSend from './ButtonSend';

export default class AddMovie extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   subtitle: '',
    //   title: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    // };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  onClick() {

  }

  render() {
    const { title, subtitle, storyline, imagePath, rating, genre, onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <InputTitle title={ title } />
        <InputSubTitle subtitle={ subtitle } />
        <ImagePath imagePath={ imagePath } />
        <TextAreaSynopsis storyline={ storyline } />
        <InputRating rating={ rating } />
        <SelectGenre genre={ genre } />
        <ButtonSend onClick={ onClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
