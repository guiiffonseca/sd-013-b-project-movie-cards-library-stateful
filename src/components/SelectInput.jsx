import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectInput extends Component {
  render() {
    const { id, label, value, onChange, options } = this.props;
    const optionId = `${id.replace('-input', '')}-option`;
    const name = id.replace('-input', '');

    return (
      <label htmlFor={ name } data-testid={ `${id}-label` }>
        { label }
        <select
          data-testid={ id }
          name={ name }
          value={ value }
          onChange={ onChange }
        >
          {options.map(({ value: valueOfGenre, text }) => (
            <option
              key={ valueOfGenre }
              value={ valueOfGenre }
              data-testid={ optionId }
            >
              { text }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SelectInput;
