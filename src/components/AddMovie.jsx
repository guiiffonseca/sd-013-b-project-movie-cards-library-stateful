// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import InpuField from './InputField';
import InputTextarea from './InputTextarea';
import InputImagePath from './InputImagePath';
import InputSelect from './InputSelect';
import InputFieldNumber from './InputFieldNumber';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    const value = (event.target.name === 'rating')
      ? parseFloat(event.target.value) : event.target.value;
    const { name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InpuField
          label="Título"
          type="text"
          value={ title }
          name="title"
          onChange={ this.handleChange }
        />
        <InpuField
          label="Subtítulo"
          type="text"
          value={ subtitle }
          name="subtitle"
          onChange={ this.handleChange }
        />
        {/* Para o campo InputImage, fui obrigado a criar um novo componente, pois,
        este campo não seguiu o padrão dos outros. */}
        <InputImagePath
          value={ imagePath }
          onChange={ this.handleChange }
        />
        <InputTextarea
          label="Sinopse"
          value={ storyline }
          name="storyline"
          onChange={ this.handleChange }
        />
        <InputFieldNumber
          label="Avaliação"
          type="number"
          value={ rating }
          name="rating"
          onChange={ this.handleChange }
        />
        <InputSelect value={ genre } onChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleClick }
        >
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
