/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataComp from './Sub-Components(AddMovie)/DataComp';
import GenreComp from './Sub-Components(AddMovie)/GenreComp';

export default class AddMovie extends Component {
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

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, storyline, rating, genre, imagePath } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label">
            Título
            <imput
              type="text"
              id="title"
              name="title"
              value={ title }
              onChange={ this.handleChange }
            />
          </label>
          <DataComp
            subtitle={ subtitle }
            storyline={ storyline }
            imagePath={ imagePath }
          />
          <GenreComp
            genre={ genre }
          />
          <label data-testid="rating-input-label">
            <imput
              data-testid="rating-input"
              type="number"
              id="rating"
              name="rating"
              value={ rating }
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </div>
    );
  }
}

AddMovie.protoTypes = {
  onClick: PropTypes.func.isRequired,
};
