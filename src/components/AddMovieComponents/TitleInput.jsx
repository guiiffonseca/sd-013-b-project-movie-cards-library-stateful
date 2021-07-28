import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="title-input"
        data-testid="title-input-label"
      >
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TitleInput;
