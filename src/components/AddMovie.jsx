import React from 'react';
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
    // this.handleClickBtn = this.handleClickBtn.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    // const addMovieState = { title, subtitle, imagePath, storyline };
    return (
      <form data-testid="add-movie-form">
        <InputLabel
          handleChange={ this.handleChange }
          name="title"
          textContent="Título"
          value={ title }
        />
        <InputLabel
          handleChange={ this.handleChange }
          name="subtitle"
          textContent="Subtítulo"
          value={ subtitle }
        />
        <InputLabel
          handleChange={ this.handleChange }
          name="imagePath"
          textContent="Imagem"
          dataTest="imagePath"
          value={ imagePath }
        />
        <InputLabel
          handleChange={ this.handleChange }
          name="storyline"
          textContent="Sinopse"
          dataTest="storyline"
          type="textarea"
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
        {/* <button type="button" data-testid="send-button" onClick=""> */}
        {/* </button> */}
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
