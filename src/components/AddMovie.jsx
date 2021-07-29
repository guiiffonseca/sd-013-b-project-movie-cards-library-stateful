// implement AddMovie component here
import React from 'react';
// import PropTypes from 'prop-types';
import InputForm from './InputForm';
import Data from './GeneratInputForms';

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
    this.onChangeEvent = this.onChangeEvent.bind(this);
    this.getValue = this.getValue.bind(this);
    this.addMovieButton = this.addMovieButton.bind(this);
  }

  onChangeEvent({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  getValue(value) {
    const objectState = Object.entries(this.state);
    let toReturn;
    objectState.forEach((element) => {
      if (element[0] === value) {
        const test = element[1];
        toReturn = test;
      }
    });
    return toReturn;
  }

  addMovieButton() {
  }

  render() {
    // const { onClick } = this.props;
    // console.log(this.getValue('title'));
    return (
      <form data-testid="add-movie-form">
        <fieldset>
          { Data.map((value) => (
            <InputForm
              key={ value.title }
              data={ value }
              onCha={ this.onChangeEvent }
              get={ this.getValue }
            />))}
          <label htmlFor="input-select" data-testid="genre-input-label">
            Gênero
            <select id="slct" data-testid="genre-input" onChange={ this.onChangeEvent }>
              <option value="action" selected data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
          <button
            data-testid="send-button"
            id="btn"
            type="submit"
            onClick={ this.addMovieButton }
          >
            Adicionar filme
          </button>
        </fieldset>
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
