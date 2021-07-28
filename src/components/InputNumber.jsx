import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
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
          type="number"
          id={ id }
          value="0"
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  id: PropTypes.string
    .isRequired,
  labelTest: PropTypes.string
    .isRequired,
  name: PropTypes.string
    .isRequired,
  // value: PropTypes.number
  //   .isRequired,
};

export default InputNumber;
