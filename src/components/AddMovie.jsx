import React from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title-input">
            Título
            <input
              data-testid="title-input"
              name="title"
              value={ title }
              onChange={ this.handleChange }
              type="text"
            />
          </label>

          <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
            Subtítulo
            <input
              data-testid="subtitle-input"
              name="subtitle"
              value={ subtitle }
              onChange={ this.handleChange }
              type="text"
            />
          </label>

          <label data-testid="image-input-label" htmlFor="image-input">
            Imagem
            <input
              data-testid="image-input"
              name="imagePath"
              value={ imagePath }
              onChange={ this.handleChange }
              type="text"
            />
          </label>
        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
