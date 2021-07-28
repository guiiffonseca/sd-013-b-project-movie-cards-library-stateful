import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      // storyLine: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleChange }
          />
        </label>

      </form>
    );
  }
}

export default AddMovie;
