import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label htmlFor="movie-title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          data-testid="title-input"
          value={ title }
          id="movie-title-input"
          type="text"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Title;
