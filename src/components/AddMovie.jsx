// implement AddMovie component here
import React from 'react';

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

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const { value } = event.target;
    this.setState({ title: value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.onClick }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
