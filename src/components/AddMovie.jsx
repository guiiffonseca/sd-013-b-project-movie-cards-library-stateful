import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Select from './Select';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      genre: 'action',
      imagePath: '',
      rating: 0,
      storyLine: '',
      subtitle: '',
      title: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState((previousState) => {
      const { onClick } = this.props;

      onClick(previousState);

      return {
        genre: 'action',
        imagePath: '',
        rating: 0,
        storyLine: '',
        subtitle: '',
        title: '',
      };
    });
  }

  renderInput = ([id, labelText, value, type = 'text', name]) => (
    <Input
      id={ id }
      key={ id }
      labelText={ labelText }
      name={ name }
      onChange={ this.handleChange }
      type={ type }
      value={ value }
    />
  )

  renderFormHandles = ({ genre, imagePath, rating, storyLine, subtitle, title }) => (
    <>
      {[
        this.renderInput(['title', 'Título', title]),
        this.renderInput(['subtitle', 'Subtítulo', subtitle]),
        this.renderInput(['image', 'Imagem', imagePath, 'text', 'imagePath']),
      ]}
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          name="storyLine"
          id="storyLine"
          value={ storyLine }
          data-testid="storyline-input"
          onChange={ this.handleChange }
        />
      </label>
      {
        this.renderInput(['rating', 'Avaliação', rating, 'number'])
      }
      <Select
        id="genre"
        genres={ [
          { value: 'action', optionText: 'Ação' },
          { value: 'comedy', optionText: 'Comédia' },
          { value: 'thriller', optionText: 'Suspense' },
        ] }
        labelText="Gênero"
        onChange={ this.handleChange }
        value={ genre }
      />
    </>
  )

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.renderFormHandles(this.state) }
        <button type="submit" data-testid="send-button" onClick={ this.handleSubmit }>
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
