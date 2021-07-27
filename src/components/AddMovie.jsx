import React, { Component } from "react";

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

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="</label>" data-testid="title-input-label">
          Título
          <input type="text" data-testid="title-input" />
        </label>

      </form>
    );
  }
}

export default AddMovie;
