import React, { Component } from 'react';

class AddMovie extends Component {
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
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            value={ title }
            onChange={ this.handleChange }
            data-testid="title-input"
            type="text"
            name="title"
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            onChange={ this.handleChange }
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            name="subtitle"
          />
        </label>
      </form>

    );
  }
}

export default AddMovie;
