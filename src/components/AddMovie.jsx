// implement AddMovie component here
import React from 'react';
import CampoInputs from './CampoInputs';
import Input from './Input';

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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <CampoInputs
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          storyline={ storyline }
          func={ this.EventSetstate }
        />
        <label htmlFor="textArea" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="textArea"
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.EventSetstate }
          />
        </label>
        <Input
          texto="Avaliação"
          value={ rating }
          nome="rating"
          tipo="number"
          id="addNum"
          dataID="rating-input"
          func={ this.EventSetstate }
          idLabel="rating-input-label"
        />
        <label data-testid="genre-input-label" htmlFor="idsel">
          Gênero
          <select
            value={ genre }
            onChange={ this.EventSetstate }
            name="genre"
            id="idSel"
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
          <button type="submit" data-testid="send-button">Adcionar filme</button>
        </label>
      </form>
    );
  }
}
