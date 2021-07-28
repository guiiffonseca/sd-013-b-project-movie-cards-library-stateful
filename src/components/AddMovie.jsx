// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
class AddMovie extends React.Component {
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
    this.onChangeEvent = this.onChangeEvent.bind(this);
  }

  onChangeEvent({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // const { onClick } = this.props;
  render() {
    const teste = 'title';
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <fieldset>
          {/* <label htmlFor="title" data-testid={ `${teste}-input-label` }>
            Título:
            <input
              type="text"
              name="title"
              data-testid="title-input"
              value={ title }
              onChange={ this.onChangeEvent }
            />
          </label>
          <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
            Subtítulo:
            <input
              type="text"
              name="subtitle"
              data-testid="subtitle-input"
              value={ subtitle }
              onChange={ this.onChangeEvent }
            />
          </label>
          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem:
            <input
              type="text"
              name="imagePath"
              data-testid="image-input"
              value={ imagePath }
              onChange={ this.onChangeEvent }
            />
          </label>
          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse:
            <input
              type="text"
              name="storyline"
              data-testid="storyline-input"
              value={ storyline }
              onChange={ this.onChangeEvent }
            />
          </label> */}
        </fieldset>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
