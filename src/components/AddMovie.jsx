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

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.setState;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label 
          htmlFor="titulo"
          data-testid="title-input-label">
            Título
            <input type="text"
            id="titulo"
            value= { title }
            data-testid="title-input"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
