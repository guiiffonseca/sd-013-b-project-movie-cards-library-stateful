import React from 'react';
import InputNumber from './InputNumber';
// import PropTypes from 'prop-types';
import InputText from './InputText';
import LabelCompo from './LabelCompo';

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
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  restoreChanges = () => {
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
    const { handleChange, restoreChanges } = this;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <LabelCompo htmlFor="title" text="Título" id="title" />
        <InputText value={ title } name="title" id="title" on={ handleChange } />
        <LabelCompo htmlFor="subtitle" text="Subtítulo" id="subtitle" />
        <InputText value={ subtitle } name="subtitle" id="subtitle" on={ handleChange } />
        <LabelCompo htmlFor="image" text="Imagem" id="image" />
        <InputText value={ imagePath } name="imagePath" id="image" on={ handleChange } />
        <LabelCompo htmlFor="image-input" text="Sinopse" id="storyline" />
        <textarea
          value={ storyline }
          name="storyline"
          data-testid="storyline-input"
          onChange={ handleChange }
        />
        <LabelCompo htmlFor="rating" text="Avaliação" id="rating" />
        <InputNumber value={ rating } name="rating" id="rating" on={ handleChange } />
        <LabelCompo htmlFor="genre" text="Gênero" id="genre" />
        <select
          value={ genre }
          name="genre"
          data-testid="genre-input"
          onChange={ handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
        <button type="submit" data-testid="send-button" onClick={ restoreChanges }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
