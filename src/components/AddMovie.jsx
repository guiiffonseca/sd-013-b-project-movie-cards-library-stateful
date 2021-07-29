import React from 'react';
import InputRating from './subcomponents/InputRating';
import Title from './subcomponents/Title';
import Subtitle from './subcomponents/Subtitle';
import Storyline from './subcomponents/Storyline';
import Image from './subcomponents/Image';
import Genre from './subcomponents/Genre';
import Button from './subcomponents/Button';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
      title: '',
      subtitle: '',
      storyline: '',
      genre: '',
      imagePath: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,

    });
  }

  render() {
    const { rating, title, subtitle, imagePath, storyline, genre } = this.state;
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          <Title value={ title } onChange={ this.handleChange } />
          <Subtitle value={ subtitle } onChange={ this.handleChange } />
          <Storyline value={ storyline } onChange={ this.handleChange } />
          <Image value={ imagePath } onChange={ this.handleChange } />
          <InputRating value={ rating } onChange={ this.handleChange } />
          <Genre value={ genre } onChange={ this.handleChange } />
          <Button onChange={ this.handleChange } />
        </form>
      </div>
    );
  }
}

export default AddMovie;

// Lembrar do onChange do input Titulo.
// Verificar como o value e o onChange do select vao funcionar (valor e função que vao usar)
// Veirificar como o onChange do botao vai funcionar, requisito 14

// AddMovie.propTypes = {
//   title: PropTypes.string.isRequired,
//   subtitle: PropTypes.string.isRequired,
//   imagePath: PropTypes.string.isRequired,
//   storyline: PropTypes.string.isRequired,
//   // rating: PropTypes.number.isRequired,
// };

/* <label htmlFor="a" data-testid="title-input-label">
            Título
            <input value={ title } type="text" name="" id="a" data-testid={ i1 } />
          </label> */

/* <label htmlFor="b" data-testid="subtitle-input-label">
            Subtítulo
            <input value={ subtitle } type="text" name="" id="b" data-testid={ i2 } />
          </label> */

/* <label htmlFor="c" data-testid="image-input-label">
            Imagem
            <input value={ imagePath } type="text" name="" id="c" data-testid={ i3 } />
          </label> */

/* <label htmlFor="e" data-testid="rating-input-label">
            Avaliação
            <input value={ rating } type="number" name="rating" id="e" data-testid={ i5 } onChange={ this.handleChange } />
          </label> */

/* <label htmlFor="e" data-testid="rating-input-label">
            Avaliação
            <input value={ rating } type="number" name="rating" id="e" data-testid={ i5 } onChange={ this.handleChange } />
          </label> */
