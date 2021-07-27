import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      // rating: 0,
      // genre: 'action',
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeSubtitle = this.handleChangeSubtitle.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeSinopse = this.handleChangeSinopse.bind(this);
    // this.handleChangeRating = this.handleChangeRating.bind(this);
    // this.handleChangeGenre = this.handleChangeGenre.bind(this);
  }

  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  handleChangeSubtitle = (event) => {
    this.setState({
      subtitle: event.target.value,
    });
  }

  handleChangeImage = (event) => {
    this.setState({
      imagePath: event.target.value,
    });
  }

  handleChangeSinopse = (event) => {
    this.setState({
      storyline: event.target.value,
    });
  }

  // handleChangeRating = (event) => {
  //   this.setState({
  //     rating: event.target.value,
  //   });
  // }

  // handleChangeGenre = (event) => {
  //   this.setState({
  //     genre: event.target.value,
  //   });
  // }

  render() {
    // adicionar rating e genre depois
    const { subtitle, title, imagePath, storyline } = this.state;
    // const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            data-testid="title-input"
            id="title-input"
            type="text"
            value={ title }
            onChange={ this.handleChangeTitle }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            data-testid="subtitle-input"
            id="subtitle-input"
            type="text"
            value={ subtitle }
            onChange={ this.handleChangeSubtitle }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            data-testid="image-input"
            id="image-input"
            type="text"
            value={ imagePath }
            onChange={ this.handleChangeImage }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            data-testid="storyline-input"
            id="storyline-input"
            value={ storyline }
            onChange={ this.handleChangeSinopse }
          />
        </label>
      </form>
    );
  }
}
// subir isso depois
// {/* <label data-testid="rating-input-label" htmlFor="rating-input">
//   Avaliação
//   <input data-testid="rating-input" id="rating-input" type="number" value={ rating } onChange={ this.handleChangeRating } />
// </label> */}
// {/* <label data-testid="genre-input-label" htmlFor="genre-input">
//   Gênero
//   <select data-testid="genre-input" id="genre-input" value={ genre } onChange={ this.handleChangeGenre }>
//     <option data-testid="genre-option" value="action">Ação</option>
//     <option data-testid="genre-option" value="comedy">Comédia</option>
//     <option data-testid="genre-option" value="thriller">Suspense</option>
//   </select>
// </label> */}
// {/* <button data-testid="send-button" type="submit"
// onClick={ onClick }>Adicionar filme</button> */}
// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
