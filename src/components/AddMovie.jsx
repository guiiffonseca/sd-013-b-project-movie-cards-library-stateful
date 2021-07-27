import React from 'react';
import TextInput from './TextInput';

export default class AddMovie extends React.Component {
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

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { onclick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TextInput
          dataTestidLabel="title-input-label"
          text="Título:"
          type="text"
          name="title"
          value={ title }
          dataTestid="title-input"
          onChange={ this.handleChange }
        />
        <TextInput
          dataTestidLabel="subtitle-input-label"
          text="Subtítulo:"
          type="text"
          name="subtitle"
          value={ subtitle }
          dataTestid="subtitle-input"
          onChange={ this.handleChange }
        />
        <TextInput
          dataTestidLabel="image-input-label"
          text="Imagem:"
          type="text"
          name="imagePath"
          value={ imagePath }
          dataTestid="image-input"
          onChange={ this.handleChange }
        />
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse:
          <textarea
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
            name="storyline"
          />
        </label>
      </form>
    );
  }
}
