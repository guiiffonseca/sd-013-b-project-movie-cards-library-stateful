// implement AddMovie component here
import React from 'react';
import TitleInput from './InputsAddMovie/TitleInputs';
import SubtitleInput from './InputsAddMovie/SubtitleInput';
import ImageInput from './InputsAddMovie/ImageInput';
import StorylineInput from './InputsAddMovie/StorylineInput';
import RatingInput from './InputsAddMovie/RatingInput';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.submitButton = this.submitButton.bind(this);

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

  submitButton() {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { state } = this;
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
        <StorylineInput
          value={ state.storyline }
          handleChange={ this.handleChange }
        />
        <RatingInput
          value={ state.rating }
          handleChange={ this.handleChange }
        />
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            id="genre-input"
            name="genre"
            value={ state.genre }
            onChange={ this.handleChange }
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          id="genre-input"
          type="submit"
          data-testid="send-button"
          onClick={ this.submitButton }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
