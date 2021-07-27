// implement AddMovie component here
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
      genre: '',
    };
    this.hadleChange = this.hadleChange.bind(this);
  }

  hadleChange({ target }) {
    this.setState({
      title: target.value,
    });
  }

  render() {
    const { state } = this;
    return (
      <form action="" data-testid="add-movie-form">
        <label htmlFor="title-movie" data-testid="title-input-label">
          Título:
          <input type="text" id="title-movie" value={state.title} data-testid="title-input" onChange={this.hadleChange} />
        </label>
      </form>
    );
  }
}

export default AddMovie;
