import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      id,
      labelTest,
      name,
    } = this.props;

    return (
      <label
        htmlFor={ id }
        data-testid={ labelTest }
      >
        {name}
        <input
          data-testid={ id }
          type="text"
          id={ id }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string
    .isRequired,
  labelTest: PropTypes.string
    .isRequired,
  name: PropTypes.string
    .isRequired,
};

export default Input;
