// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action' };
  }

  onInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const s = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="addmovietitleinput">
            Título
            <input
              type="text"
              value={ s.title }
              id="addmovietitleinput"
              data-testid="title-input"
              onChange={ this.onInputChange }
              name="title"
            />
            <label data-testid="subtitle-input-label" htmlFor="addmoviesubtitleinput">
              Subtítulo:
              <input
                type="text"
                id="addmoviesubtitleinput"
                value={ s.subtitle }
                data-testid="subtitle-input"
                onChange={ this.onInputChange }
                name="subtitle"
              />
            </label>
          </label>
        </form>
      </div>);
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,

};

export default AddMovie;
