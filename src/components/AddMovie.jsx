// implement AddMovie component here
import React, { Component } from 'react';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <div>
          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input
              type="text"
              value={ title }
              data-testid="title-input"
              onChange={ (e) => { this.setState({ title: e.target.value }) } }
            />
          </label>
        </div>
      </form>
    );
  }
}
