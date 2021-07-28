import React from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import Select from './Select';

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
          value={ title }
          onChange={ this.handleChange }
        />
        <TextInput
          dataTestidLabel="subtitle-input-label"
          text="Subtítulo:"
          type="text"
          value={ subtitle }
          onChange={ this.handleChange }
        />
        <TextInput
          dataTestidLabel="image-input-label"
          text="Imagem:"
          type="text"
          value={ imagePath }
          onChange={ this.handleChange }
        />
        <TextArea value={ storyline } onChange={ this.handleChange } />
        <TextInput
          dataTestidLabel="rating-input-label"
          text="Avaliação:"
          type="number"
          value={ rating }
          onChange={ this.handleChange }
        />
        <Select
          dataTestidLabel="genre-input-label"
          text="Gênero"
          value={ genre }
          onChange={ this.handleChange }
          options={ [{ action: 'Ação' },
            { comedy: 'Comédia' }, { thriller: 'Suspense' }] }
        />
      </form>
    );
  }
}
