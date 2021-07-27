import React from 'react';

export default class AddMovie extends React.Component {
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

  inputText = ({ target }) => {
    this.setState({ title: target.value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onclick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            data-testid="title-input"
            value={ title }
            onChange={ this.inputText }
          />
        </label>
      </form>
    );
  }
}
