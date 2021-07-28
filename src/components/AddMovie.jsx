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
    console.log('chamou onchange');
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  getValue(value) {
    console.log('chamou get');
    const objectState = Object.entries(this.state);
    objectState.find((element) => element[0] === value);
  }

  addMovieButton() {
    console.log('teste');
  }

  render() {
    // const { onClick } = this.props;
    return (
      <form>
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
              <option name="genre" value="action" selected>Ação</option>
              <option name="genre" value="comedy">Comédia</option>
              <option name="genre" value="thriller">Suspense</option>
            </select>
          </label>
          <button
            data-testid="send-button"
            id="btn"
            type="button"
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
