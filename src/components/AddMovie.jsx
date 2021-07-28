import React from 'react';
import PropTypes from 'prop-types';

// ID dos inputs, pois o lint reclamava do tamanho da linha OBS, se o tamanho do arquivo nao der problema,
// quebrar a linha dos inputs ou criar sub-elementos.
const i1 = 'title-input';
const i2 = 'subtitle-input';
const i3 = 'image-input';
const i = 'storyline-input';
const i5 = 'rating-input';

class AddMovie extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     rating: 0,
  //   };
  // }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.props;
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          <label htmlFor="a" data-testid="title-input-label">
            Título
            <input value={ title } type="text" name="" id="a" data-testid={ i1 } />
          </label>
          <label htmlFor="b" data-testid="subtitle-input-label">
            Subtítulo
            <input value={ subtitle } type="text" name="" id="b" data-testid={ i2 } />
          </label>
          <label htmlFor="c" data-testid="image-input-label">
            Imagem
            <input value={ imagePath } type="text" name="" id="c" data-testid={ i3 } />
          </label>
          <label htmlFor="d" data-testid="storyline-input-label">
            Sinopse
            <input value={ storyline } type="textarea" name="" id="d" data-testid={ i } />
          </label>
          <label htmlFor="e" data-testid="rating-input-label">
            Avaliação
            <input value={ rating } type="number" name="" id="e" data-testid={ i5 } />
          </label>

        </form>
      </div>
    );
  }
}

// Lembrar do onChange do input Titulo.
AddMovie.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default AddMovie;
