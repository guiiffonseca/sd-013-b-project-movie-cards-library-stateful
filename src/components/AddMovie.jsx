// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './InputsAddMovie/TitleInputs';
import SubtitleInput from './InputsAddMovie/SubtitleInput';
import ImageInput from './InputsAddMovie/ImageInput';
// import TitleInput from './Inputs/TitleInputs';
// import TitleInput from './Inputs/TitleInputs';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { props, state } = this;
    return (
      <form id="AddMovies-form" data-testid="add-movie-form">
        <TitleInput
          value={ state.title }
          handleChange={ this.handleChange }
        />
        <SubtitleInput
          value={ state.subtitle }
          handleChange={ this.handleChange }
        />
        <ImageInput
          value={ state.imagePath }
          handleChange={ this.handleChange }
        />
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <input
            type="text"
            name={ props.storyline }
            id="storyline-input"
            data-testid="storyline-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="text"
            name={ props.rating }
            id="rating-input"
          />
        </label>
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
};

export default AddMovie;
