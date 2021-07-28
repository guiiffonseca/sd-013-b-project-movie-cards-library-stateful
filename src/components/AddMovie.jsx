import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImagePath from './InputImagePath';
import InputStoryline from './InputStoryline';
import InputRating from './InputRating';
import InputGenre from './InputGenre';

const INITIAL_STATE = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form onSubmit={ this.handleSubmit } data-testid="add-movie-form">
        <InputTitle
          value={ title }
          onChange={ this.handleChange }
        />
        <InputSubtitle
          value={ subtitle }
          onChange={ this.handleChange }
        />
        <InputImagePath
          value={ imagePath }
          onChange={ this.handleChange }
        />
        <InputStoryline
          value={ storyline }
          onChange={ this.handleChange }
        />
        <InputRating
          value={ rating }
          onChange={ this.handleChange }
        />
        <InputGenre
          value={ genre }
          onChange={ this.handleChange }
        />
        <button
          className="button"
          data-testid="send-button"
          type="submit"
          onClick={ this.handleSubmit }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
