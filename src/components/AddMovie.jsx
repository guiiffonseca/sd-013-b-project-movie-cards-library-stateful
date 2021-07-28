// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import CampoInputs from './CampoInputs';

class AddMovie extends React.Component {
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
    this.ClickButton = this.ClickButton.bind(this);
  }

  EventSetstate(event) {
    this.setState(({ [event.target.name]: event.target.value }));
  }

  ClickButton(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    document.querySelector('form').reset();
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.ClickButton }>
        <CampoInputs
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          storyline={ storyline }
          func={ this.EventSetstate }
          rating={ rating }
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
          <button type="submit" data-testid="send-button">
            Adicionar filme
          </button>
        </label>
        {' '}

      </form>
    );
  }
}
AddMovie.propTypes = {

  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
