import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      labelId,
      testId,
      txt,
      id,
      type,
      value,
      onChange } = this.props;

    return (
      <label
        data-testid={ labelId }
        htmlFor={ id }
      >
        {txt}
        <input
          data-testid={ testId }
          id={ id }
          type={ type }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  labelId: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Input;
