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
    this.handleTitle = this.handleTitle.bind(this);
  }

  handleTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="add-input-text">
          Título
          <input
            type="text"
            id="add-input-text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleTitle }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
