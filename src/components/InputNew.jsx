import React from 'react';
import PropTypes from 'prop-types';

class InputNew extends React.Component {
  render() {
    const { d, id, value, callback } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-input-label` }>
        { d }
        <input
          type="text"
          name={ id }
          value={ value }
          id={ id }
          data-testid={ `${id}-input` }
          onChange={ callback }
        />
      </label>
    );
  }
}

export default InputNew;

InputNew.propTypes = {
  d: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
