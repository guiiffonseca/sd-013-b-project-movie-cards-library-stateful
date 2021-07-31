import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '', // guarda o subtítulo preenchido no formulário por quem usa a aplicação;
      title: '', // guarda o título preenchido no formulário por quem usa a aplicação;
      // imagePath: '', // guarda o caminho da imagem preenchido no formulário por quem usa a aplicação;
      // storyline: '', // guarda a sinopse do filme escrita no formulário por quem usa a aplicação;
      // rating: 0, // guarda a nota de avaliação dada no formulário por quem usa a aplicação;
      // genre: 'action', // guarda o gênero do filme selecionado no formulário por quem usa a aplicação.
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const {
      title,
      subtitle,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <section>
          <label data-testid="title-input-label" htmlFor="title">
            Título:
            <input
              id="title"
              value={ title }
              data-testid="title-input"
              onChange={ this.handleChange }
            />
          </label>
        </section>
        <section>
          <label data-testid="subtitle-input-label" htmlFor="subtitle">
            Subtítulo:
            <input
              id="subtitle"
              value={ subtitle }
              data-testid="subtitle-input"
              onChange={ this.handleChange }
            />
          </label>
        </section>
      </form>
    );
  }
}

export default AddMovie;
