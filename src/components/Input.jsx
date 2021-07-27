import React from 'react';
import PropTypes from 'prop-types';

function Input({
  id,
  label,
  testidInput,
  testidLabel,
  ...rest
}) {
  return (
    <label
      data-testid={ testidLabel }
      htmlFor={ id }
    >
      { label }
      <input
        data-testid={ testidInput }
        id={ id }
        { ...rest }
      />
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  testidInput: PropTypes.string.isRequired,
  testidLabel: PropTypes.string.isRequired,
};

export default Input;
