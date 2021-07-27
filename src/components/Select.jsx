import React from 'react';
import PropTypes from 'prop-types';

function Select({
  id,
  labelText,
  genres,
  name,
  ...rest
}) {
  return (
    <label
      data-testid={ `${id}-input-label` }
      htmlFor={ id }
    >
      { labelText }
      <select
        data-testid={ `${id}-input` }
        id={ id }
        name={ name || id }
        { ...rest }
      >
        {
          genres.map(({ value, optionText }, index) => (
            <option
              data-testid={ `${id}-option` }
              key={ index }
              value={ value }
            >
              { optionText }
            </option>
          ))
        }
      </select>
    </label>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    optionText: PropTypes.string,
  })).isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string,
};

Select.defaultProps = {
  name: undefined,
};

export default Select;
