import React from 'react';
import PropTypes from 'prop-types';

import TextInput from './TextInput';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleTextInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;

    return (
      <form data-testid="add-movie-form">
        <TextInput
          label="Título"
          id="title-input"
          value={ title }
          onChange={ this.handleTextInput }
        />

        <TextInput
          label="Subtítulo"
          id="subtitle-input"
          value={ subtitle }
          onChange={ this.handleTextInput }
        />

        <TextInput
          label="Imagem"
          id="image-input"
          value={ imagePath }
          onChange={ this.handleTextInput }
        />

        <label htmlFor="storyline" data-testid="storyline-input-label">
          <textarea
            name="storyline"
            id="storyline"
            data-testid="storyline-input"
            cols="30"
            rows="10"
            value={ storyline }
            onChange={ this.handleTextInput }
          />
        </label>

        <button type="submit" onClick={ onClick }>
          Enviar
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
