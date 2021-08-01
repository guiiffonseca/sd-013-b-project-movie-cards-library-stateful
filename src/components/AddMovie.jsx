import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.creatLabel = this.creatLabel.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  // Consegui ter uma ideia fazendo o code review do projeto da  Jessica (https://github.com/tryber/sd-013-b-project-movie-cards-library-stateful/pull/113/commits/9a9554fccc55639dea89496991e9fac890e11635)

  creatLabel = (descrition, id, value, callBack) => {
    return (
      <label htmlFor={ id } data-tesid={ `${id}-input-label` }>
        { descrition }
        <input
          type="text"
          name={ id }
          value={ value }
          id={ id }
          data-tesid={ `${id}-input` }
          onChange={ callBack }
        />
      </label>);
  }

  render() {
    const onClick = this.props;
    const { subtitle, title, imagePath, storyLine,
      rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.creatLabel('Título', 'title', title, this.handleChange)}
        {this.creatLabel('Subtítulo', 'subtitle', subtitle, this.handleChange)}
        {this.creatLabel('Imagem', 'image', imagePath, this.handleChange)}
        {this.creatLabel('Sinopse', 'storyline', storyLine, this.handleChange)}
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            id="rating"
            value={ rating }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          <selected
            data-testid="genre-input"
            name="genre"
            id="genre"
            value={ genre }
            onChange={ this.handleChange }
          >
            Gênero
            <option selected data-testid="genre-option" valor="action">Ação</option>
            <option data-testid="genre-option" valor="comedy">Comedia</option>
            <option data-testid="genre-option" valor="thriller">Suspense</option>
          </selected>
        </label>
        <label htmlFor="button">
          Adicionar filme
          <input
            data-testid="send-button"
            type="button"
            name="button"
            id="button"
            onClick={ onClick }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
