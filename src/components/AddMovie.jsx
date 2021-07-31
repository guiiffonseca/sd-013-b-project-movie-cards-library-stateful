import React from 'react';
import PropTypes from 'prop-types';
import InputAddMovie from './InputAddMovie';
import InputTypeText from './inputTypeText';

class AddMovie extends React.Component {
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
    this.handleInput = this.handleInput.bind(this);
    this.resetStateOnClick = this.resetStateOnClick.bind(this);
  }

  handleInput(event) {
    const inputValue = event.target.value;
    this.setState({
      [event.target.name]: inputValue,
    });
  }

  resetStateOnClick() {
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
      <div>
        <form data-testid="add-movie-form">
          <InputAddMovie
            rating={ rating }
            genre={ genre }
            handleInput={ this.handleInput }
          />
          <InputTypeText
            title={ title }
            subtitle={ subtitle }
            imagePath={ imagePath }
            storyline={ storyline }
            handleInput={ this.handleInput }
          />
          <button
            data-testid="send-button"
            type="button"
            onClick={ this.resetStateOnClick }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {

  onClick: PropTypes.func.isRequired,

};

export default AddMovie;
