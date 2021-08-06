import React from 'react';
import PropTypes from 'prop-types';

class InputCreater extends React.Component {
  render() {
    const { Key, handleChange, text } = this.props;
    return (
      <label htmlFor={ `${Key}-input` } data-testid={ `${Key}-input-label` }>
        { text }
        <input
          key={ Key }
          value={ Key }
          onChange={ handleChange }
          type="text"
          data-testid={ `${Key}-input` }
        />
      </label>
    );
  }
}

InputCreater.propTypes = {
  Key: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default InputCreater;
