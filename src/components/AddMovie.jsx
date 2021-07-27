// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
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

  handleOnClick = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleOnSubmit = () => {
    alert('Filme adicionado!');
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <section>
        <form onSubmit={ this.handleOnSubmit }>
          Title:
          <input 
            value={ title }
            onChange={ this.handleOnClick }
            name="title"
            type="text"
          />
          <br />
          Subtítulo:
          <input
            value={ subtitle }
            onChange={ this.handleOnClick }
            name="subtitle"
            type="text"
          />
          <br />
          URL da imagem:
          <input
            value={ imagePath }
            onChange={ this.handleOnClick }
            name="imagePath"
            type="text"
          />
          <br />
          Sinopse:
          <input
            value={ storyline }
            onChange={ this.handleOnClick }
            name="storyline"
            type="text"
          />
          <br />
          Avaliação:
          <input
            value={ rating }
            onChange={ this.handleOnClick }
            name="rating"
            type="text"
          />
          <br />
          Gênero:
          <input
            value={ genre }
            onChange={ this.handleOnClick }
            name="genre"
            type="text"
          />
          <br />
        </form>

        <button type="submit" onClick={ this.handleOnSubmit }>submit</button>

      </section>
    );
  }
}

export default AddMovie;
