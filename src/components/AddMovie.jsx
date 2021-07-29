import React from 'react';
import InputText from './CreatInputText';
import CreatLabel from './CreatLabel';
import CreatSelect from './CreatSelect';
import CreatTextArea from './CreatTextArea';

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
    const { title, subtitle, imagePath, storyline, rating, genre } = state;
    return (
      <form data-testid="add-movie-form">
        <CreatLabel forHtml="title" text="Título" id="title" />
        <InputText name="title" value={ title } on={ handleChange } id="title" />
        <CreatLabel forHtml="subtitle" text="Subtítulo" id="subtitle" />
        <InputText name="subtitle" value={ subtitle } on={ handleChange } id="subtitle" />
        <CreatLabel forHtml="image" text="Imagem" id="image" />
        <InputText name="imagePath" value={ imagePath } on={ handleChange } id="image" />
        <CreatLabel forHtml="storyline" text="Sinopse" id="storyline" />
        <CreatTextArea value={ storyline } onChange={ handleChange } />
        <CreatLabel forHtml="rating" text="Avaliação" id="rating" />
        <input
          type="number"
          id="rating"
          name="rating"
          data-testid="rating-input"
          onChange={ handleChange }
          value={ rating }
        />
        <CreatLabel forHtml="genre" text="Gênero" id="genre" />
        <CreatSelect name="genre" value={ genre } on={ handleChange } id="genre" />
      </form>
    );
  }
}

export default AddMovie;
