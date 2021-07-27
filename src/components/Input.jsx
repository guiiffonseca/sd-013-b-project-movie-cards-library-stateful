import React from 'react';
import PropTypes from 'prop-types';

function Input({
  id,
  labelText,
  name,
  ...rest
}) {
  return (
    <label
      data-testid={ `${id}-input-label` }
      htmlFor={ id }
    >
      { labelText }
      <input
        data-testid={ `${id}-input` }
        id={ id }
        name={ name || id }
        { ...rest }
      />
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string,
};

Input.defaultProps = {
  name: undefined,
};

export default Input;
