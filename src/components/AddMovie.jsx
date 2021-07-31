import React from 'react';
import PropTypes from 'prop-types';
import Titulo from './titulo';
import Subtitulo from './subtitulo';
import Imagem from './imagem';
import Sinopse from './sinopse';
import Avaliacao from './avaliacao';
import Genero from './genero';
import Botao from './botao';

class addMovie extends React.Component {
  constructor(event) {
    super(event);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.voltaTudo = this.voltaTudo.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  voltaTudo = (event) => {
    // segundo a documentação event.preventDefault:Outra diferença é que você não pode retornar false para evitar o comportamento padrão no React. Você deve chamar preventDefault explícitamente. Por exemplo, com HTML simples, para evitar o comportamento padrão do formulário de envio
    event.preventDefault();
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
  // reduzi os inputs em paginas diferentes para não dar problema de tamanho maximo no lint do render

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <section>
        <form action="" data-testid="add-movie-form">
          <Titulo title={ title } onChange={ this.handleChange } />
          <Subtitulo subtitle={ subtitle } onChange={ this.handleChange } />
          <Imagem imagePath={ imagePath } onChange={ this.handleChange } />
          <Sinopse storyline={ storyline } onChange={ this.handleChange } />
          <Avaliacao rating={ rating } onChange={ this.handleChange } />
          <Genero genre={ genre } onChange={ this.handleChange } />
          <Botao onClick={ this.voltaTudo } />
        </form>
      </section>
    );
  }
}
addMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default addMovie;
