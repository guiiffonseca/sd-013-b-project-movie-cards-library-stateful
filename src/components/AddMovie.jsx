import React from 'react';

export default class AddMovies extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: "",
      title: '',
      imagePath:"",
      storyLine:"",
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            value={ title }
            name="title"
            type="text"
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}
