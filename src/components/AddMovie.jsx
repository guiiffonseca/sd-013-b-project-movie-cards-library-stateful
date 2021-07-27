// implement AddMovie component here
import React from 'react';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.EventSetstate = this.EventSetstate.bind(this);
  }

  EventSetstate(event) {
    this.setState(({ [event.target.name]: event.target.value }));
  }

  render() {
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="add" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            id="add"
            name="title"
            data-testid="title-input"
            onChange={ this.EventSetstate }
          />
        </label>

        <label htmlFor="addSub" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            name="subtitle"
            id="addSub"
            data-testid="subtitle-input"
            onChange={ this.EventSetstate }
          />
        </label>

          <label htmlFor="addSub" data-testid="subtitle-input-label">
         Imagem
          <input
            type="text"
            value={ subtitle }
            name="subtitle"
            id="addSub"
            data-testid="subtitle-input"
            onChange={ this.EventSetstate }
          />
        </label>
      </form>
    );
  }
}
