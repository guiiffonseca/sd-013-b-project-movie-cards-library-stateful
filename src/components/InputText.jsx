import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { value, name, id, on } = this.props;
    return (
      <input
        type="text"
        value={ value }
        name={ name }
        data-testid={ `${id}-input` }
        onChange={ on }
      />
    );
  }
}

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  on: PropTypes.func.isRequired,
};

export default InputText;
