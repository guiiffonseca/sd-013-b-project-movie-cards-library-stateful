import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleInput extends Component {
  render() {
    const { input, value, onChange } = this.props;
    return (
      <label htmlFor={ `${input}-input` } data-testid={ `${input}-input-label` }>
        Título
        <input
          type="text"
          data-testid={ `${input}-input` }
          name={ input }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  input: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TitleInput;
