import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubTitle from './InputSubTitle';
import ImagePath from './ImagePath';
import TextAreaSynopsis from './TextAreaSynopsis';
import InputRating from './InputRating';
import SelectGenre from './SelectGenre';
import ButtonSend from './ButtonSend';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const elementValue = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: elementValue });
  }

  handleClick = () => {
    const { onClick } = this.props;
    // Esta linha faz a mágica acontecer!
    onClick(this.state);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle title={ title } handleChange={ this.handleChange } />
        <InputSubTitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <ImagePath imagePath={ imagePath } handleChange={ this.handleChange } />
        <TextAreaSynopsis storyline={ storyline } handleChange={ this.handleChange } />
        <InputRating rating={ rating } handleChange={ this.handleChange } />
        <SelectGenre genre={ genre } handleChange={ this.handleChange } />
        <ButtonSend onClick={ this.handleClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
