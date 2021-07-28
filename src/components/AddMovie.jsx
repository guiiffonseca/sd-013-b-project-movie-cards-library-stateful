import React from 'react';
import PropTypes from 'prop-types';

import TextInput from './TextInput';
import TextArea from './TextArea';
import Select from './Select';
import Button from './Button';

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

  handleButton = () => {
    const { onClick } = this.props;
    onClick(this.state);
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
        <Button onClick={ this.handleButton } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
