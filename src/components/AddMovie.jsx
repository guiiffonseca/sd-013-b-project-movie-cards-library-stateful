// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

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
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    const { title, subtitle } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="Input-Title">
          Título
          <input
            data-testid="title-input"
            type="text"
            value={ title }
            onChange={ this.handleInput }
            id="Input-Title"
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="Input-Subtitle">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            value={ subtitle }
            id="Input-Subtitle"
            onChange={ this.handleInput }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
