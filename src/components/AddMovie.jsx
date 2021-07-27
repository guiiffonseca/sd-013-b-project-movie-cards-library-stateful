import React from 'react';
import PropType from 'prop-types';

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle } = this.state;

    return (
      <form data-testid="add-movie-form">

        <label htmlFor="title" data-testid="title-input-label">
          Título:
          <input
            type="text"
            id="title"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo:
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>

      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropType.func.isRequired,
};

export default AddMovie;
