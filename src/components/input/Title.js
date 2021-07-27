import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="titulo" data-testid="title-input-label">
        Título
        <input
          id="titulo"
          type="text"
          value={ value }
          data-testid="title-input"
          onChange={ onChange }
          name="title"
        />
      </label>
    );
  }
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Title;