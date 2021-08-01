import React from 'react';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
import StorylineInput from './StorylineInput';
import RatingInput from './RatingInput';
import GenreInput from './GenreInput';

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

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value });
  }

  handleClick() {
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
    const { state, handleChange, handleClick } = this;
    const { title, subtitle, imagePath, storyline, rating, genre } = state;
    return (
      <form data-testid="add-movie-form">
        <TitleInput valueProp={ title } on={ handleChange } />
        <SubtitleInput valueProp={ subtitle } on={ handleChange } />
        <ImageInput valueProp={ imagePath } on={ handleChange } />
        <StorylineInput valueProp={ storyline } on={ handleChange } />
        <RatingInput valueProp={ rating } on={ handleChange } />
        <GenreInput valueProp={ genre } on={ handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ handleClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
