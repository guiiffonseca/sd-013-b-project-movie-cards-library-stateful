import React from 'react';
import PropTypes from 'prop-types';
import GenreInput from './GenreInput';
import ImageInput from './ImageInput';
import RatingInput from './RatingInput';
import StorylineInput from './StorylineInput';
import SubtitleInput from './SubtitleInput';
import TitleInput from './TitleInput';

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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
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
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <TitleInput title={ title } handleChange={ this.handleChange } />
        <SubtitleInput subtitle={ subtitle } handleChange={ this.handleChange } />
        <ImageInput imagePath={ imagePath } handleChange={ this.handleChange } />
        <StorylineInput storyline={ storyline } handleChange={ this.handleChange } />
        <RatingInput rating={ rating } handleChange={ this.handleChange } />
        <GenreInput genre={ genre } handleChange={ this.handleChange } />

        <button
          type="submit"
          id="send-button"
          data-testid="send-button"
          onClick={ onClick }
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
