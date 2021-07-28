import React from 'react';
import CreatInput from './CreatInput';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { state, handleChange } = this;
    return (
      <form data-testid="add-movie-form">
        <CreatInput
          labelText="Titúlo"
          type="text"
          name="title"
          id="A"
          value={ state.title }
          onChange={ handleChange }
        />
        <CreatInput
          labelText="Subtítulo"
          type="text"
          name="subtitle"
          id="B"
          value={ state.subtitle }
          onChange={ handleChange }
        />
        <CreatInput
          labelText="Imagem"
          type="text"
          name="imagePath"
          id="C"
          value={ state.imagePath }
          onChange={ handleChange }
        />
        <label htmlFor="C" data-testid="storyline-input-label">
          Sinopse
          <textarea
            type="text"
            name="storyline"
            id="C"
            data-testid="storyline-input"
            value={ state.storyline }
            onChange={ handleChange }
          />
        </label>

      </form>
    );
  }
}

export default AddMovie;
