import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            name="title"
            id="title"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
