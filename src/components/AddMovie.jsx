import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LabelTextTitle from './LabelTextTitle';
import LabelTextSubtitle from './LabelTextSubtitle';
import LabelTextImage from './LabelTextImage';
import LabelTextArea from './LabelTextArea';
import LabelNumberRating from './LabelNumberRating';
import LabelSelectGenre from './LabelSelectGenre';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        <LabelTextTitle state={ title } change={ this.handleChange } />
        <LabelTextSubtitle state={ subtitle } change={ this.handleChange } />
        <LabelTextImage state={ imagePath } change={ this.handleChange } />
        <LabelTextArea state={ storyline } change={ this.handleChange } />
        <LabelNumberRating state={ rating } change={ this.handleChange } />
        <LabelSelectGenre state={ genre } change={ this.handleChange } />
        <button type="submit" data-testid="send-button" onClick={ this.handleClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
