import React from 'react';
import AddTitle from './AddTitle';
import AddSubtitle from './AddSubtitle';
import AddImagem from './AddImagem';
import AddTextArea from './AddTextArea';
import AddAvaliacao from './AddAvaliacao';
import AddGenero from './AddGenero';

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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checked' ? target.checked : target.value;
    this.setState = ({
      [name]: value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddTitle value={ title } funcao={ handleChange } />
        <AddSubtitle value={ subtitle } funcao={ handleChange } />
        <AddImagem value={ imagePath } funcao={ handleChange } />
        <AddTextArea value={ storyline } funcao={ handleChange } />
        <AddAvaliacao value={ rating } funcao={ handleChange } />
        <AddGenero value={ genre } funcao={ handleChange } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ handleClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}
export default AddMovie;
