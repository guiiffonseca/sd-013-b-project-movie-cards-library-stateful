import React from 'react';
import PropTypes from 'prop-types';

export default class Select extends React.Component {
  render() {
    const { dataTestidLabel, text, value, onChange, options } = this.props;
    const dataTestidSelect = dataTestidLabel.replace('-label', '');
    const name = dataTestidSelect.replace('-input', '');
    const dataTestid = `${name}-option`;

    const newOptions = options.map((option) => {
      const valueOption = Object.keys(option)[0];
      return (
        <option
          value={ valueOption }
          key={ valueOption }
          data-testid={ dataTestid }
        >
          { option[valueOption] }
        </option>);
    });

    return (
      <label htmlFor={ dataTestid } data-testid={ dataTestidLabel }>
        {text}
        <select
          value={ value }
          name={ name }
          onChange={ onChange }
          data-testid={ dataTestidSelect }
        >
          {newOptions}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dataTestidLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
