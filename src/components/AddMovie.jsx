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

  handleClick = (event) => {
    const { onClick } = this.props;
    event.preventDefault();
    onClick(this.state);
    this.setState({ subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, storyline, rating, genre, imagePath } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <fieldset>
            <label htmlFor="title" data-testid="title-input-label">
              Título
              <input
                id="title"
                name="title"
                data-testid="title-input"
                type="text"
                value={ title }
                onChange={ this.handleChange }
              />
            </label>
            <DataComp
              subtitle={ subtitle }
              imagePath={ imagePath }
              storyline={ storyline }
              handleChange={ this.handleChange }
            />
            <label htmlFor="rating" data-testid="rating-input-label">
              Avaliação
              <input
                id="rating"
                name="rating"
                data-testid="rating-input"
                type="number"
                value={ rating }
                onChange={ this.handleChange }
              />
            </label>
            <GenreComp genre={ genre } handleChange={ this.handleChange } />
            <button type="submit" data-testid="send-button" onClick={ this.handleClick }>
              Adicionar filme
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
