import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleClickBtn = this.handleClickBtn.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // handleClickBtn(event) {
  //   console.log('cliquei');
  // }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    // , imagePath, , rating, genre
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título:
          <input
            type="text"
            name="title"
            id="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo:
          <input
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ this.handleChange }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem:
          <input
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ this.handleChange }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="sinopse" data-testid="storyline-input-label">
          Sinopse:
          <textarea
            type="text"
            value={ storyline }
            onChange={ this.handleChange }
            data-testid="storyline-input"
          />
        </label>
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
