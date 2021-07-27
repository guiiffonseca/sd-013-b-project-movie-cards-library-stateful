import React from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';

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
        <TextArea value={ storyline } onChange={ this.handleChange } />
        <TextInput
          dataTestidLabel="rating-input-label"
          text="Avaliação:"
          type="number"
          name="rating"
          value={ rating }
          dataTestid="rating-input"
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}
