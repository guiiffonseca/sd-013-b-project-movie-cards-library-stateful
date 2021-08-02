import React from 'react';
import PropTypes from 'prop-types';
import InputText from './CreatInputText';
import CreatLabel from './CreatLabel';
import CreatSelect from './CreatSelect';
import CreatTextArea from './CreatTextArea';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick = (event) => {
    const { onClick } = this.props;
    const { state } = this;
    onClick(state, event);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { state, handleChange, handleClick } = this;
    const { title, subtitle, imagePath, storyline, rating, genre } = state;
    return (
      <form data-testid="add-movie-form">
        {/* input title */}
        <CreatLabel forHtml="title" text="Título" id="title" />
        <InputText name="title" value={ title } on={ handleChange } id="title" />
        {/* input subtitle */}
        <CreatLabel forHtml="subtitle" text="Subtítulo" id="subtitle" />
        <InputText name="subtitle" value={ subtitle } on={ handleChange } id="subtitle" />
        {/* input image */}
        <CreatLabel forHtml="image" text="Imagem" id="image" />
        <InputText name="imagePath" value={ imagePath } on={ handleChange } id="image" />
        {/* input storyline */}
        <CreatLabel forHtml="storyline" text="Sinopse" id="storyline" />
        <CreatTextArea value={ storyline } onChange={ handleChange } />
        {/* input rating */}
        <CreatLabel forHtml="rating" text="Avaliação" id="rating" />
        <input
          type="number"
          id="rating"
          name="rating"
          data-testid="rating-input"
          onChange={ handleChange }
          value={ rating }
        />
        {/* input genre */}
        <CreatLabel forHtml="genre" text="Gênero" id="genre" />
        <CreatSelect value={ genre } on={ handleChange } id="genre" />
        {/* input submit */}
        <button
          type="submit"
          data-testid="send-button"
          onClick={ handleClick }
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
