import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
      subtitle: event.target.value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            data-testid="title-input"
            value={ title }
            id="title"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="title-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            data-testid="subtitle-input"
            value={ subtitle }
            id="subtitle"
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
// npm test AddMovie.test.js
