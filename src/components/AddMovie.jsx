// implement AddMovie component here
import React from 'react';

export default class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // func pra mudar os states
  // font https://app.betrybe.com/course/front-end/componentes-com-estado-eventos-e-formularios-com-react/formularios-no-react/537fc0f4-1be1-4cd8-8333-9432fa722672/conteudos/815da631-cbdb-4637-b7fb-17e29240a8d1/event-handlers-genericos/20a033ed-ccfc-4e65-b6cb-53abf58039bb?use_case=side_bar
  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="movieName" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            id="movieName"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subTitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="subTitle"
            value={ subtitle }
            name="subtitle"
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}
