import React from 'react';
import Genre from './Genre';
import InputLabel from './InputLabel';
// import PropTypes from 'prop-types';

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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputLabel
          handleChange={ this.handleChange }
          name="title"
          textContent="Título"
          type="text"
          value={ title }
        />
        <InputLabel
          handleChange={ this.handleChange }
          name="subtitle"
          textContent="Subtítulo"
          type="text"
          value={ subtitle }
        />
        <InputLabel
          handleChange={ this.handleChange }
          name="imagePath"
          textContent="Imagem"
          dataTest="imagePath"
          type="text"
          value={ imagePath }
        />
        <InputLabel
          handleChange={ this.handleChange }
          name="storyline"
          textContent="Sinopse"
          dataTest="storyline"
          type="text"
          value={ storyline }
        />
        <InputLabel
          handleChange={ this.handleChange }
          name="rating"
          textContent="Avaliação"
          dataTest="rating"
          type="number"
          value={ rating }
        />
        <Genre value={ genre } handleChange={ this.handleChange } />
        <button type="button" data-testid="send-button" onClick={ this.handleClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  // title: PropTypes.string,
  // subtitle: PropTypes.string,
  // imagePath: PropTypes.string,
  // storyline: PropTypes.string,
  // rating: PropTypes.number,
  // genre: PropTypes.string,
};

AddMovie.defaultProps = {
  title: '',
  // subtitle: '',
  // imagePath: '',
  // storyline: '',
  // rating: 0,
  // genre: '',
};
export default AddMovie;
