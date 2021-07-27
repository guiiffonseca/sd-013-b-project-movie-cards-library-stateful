// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import InputImage from './InputImage';
import StoryLineInput from './StoryLineInput';
import SubtitleInput from './SubtitleInput';
import InputRating from './InputRating';
import GenreInput from './GenreInput';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChanges = this.handleChanges.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChanges({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  resetForm() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            name="title"
            value={ title }
            id="title-input"
            onChange={ this.handleChanges }
          />
        </label>
        <SubtitleInput value={ subtitle } handleChanges={ this.handleChanges } />
        <InputImage value={ imagePath } handleChanges={ this.handleChanges } />
        <StoryLineInput value={ storyLine } handleChanges={ this.handleChanges } />
        <InputRating value={ rating } handleChanges={ this.handleChanges } />
        <GenreInput value={ genre } handleChanges={ this.handleChanges } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ () => {
            onClick(this.state);
            this.resetForm();
          } }
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

export default AddMovie;
