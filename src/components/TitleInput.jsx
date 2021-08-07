import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleInput extends Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label
        htmlFor="title"
        data-testid="title-input-label"
      >
        Título
        <input
          type="text"
          id="title"
          name="title"
          data-testid="title-input"
          value={ title }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TitleInput;
