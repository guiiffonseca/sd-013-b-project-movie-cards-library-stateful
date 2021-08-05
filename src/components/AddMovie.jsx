import React from 'react';
import PropTypes from 'prop-types';
import CompData from './CompData';
import CompGenre from './CompGenre';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick();
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
      <div>
        <form data-testid="add-movie-form">
          <fieldset>
            <legend>== Atualizar biblioteca ==</legend>
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
            <CompData
              subtitle={ subtitle }
              imagePath={ imagePath }
              storyline={ storyline }
              rating={ rating }
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
            <CompGenre genre={ genre } handleChange={ this.handleChange } />
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

export default AddMovie;
