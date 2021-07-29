import React from 'react';
import PropTypes from 'prop-types';

class InputForm extends React.Component {
  render() {
    const { data: { name, dataTestid, id, type, title }, get, onCha } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${dataTestid}-label` }>
        { title }
        <input
          type={ type }
          id={ id }
          name={ name }
          data-testid={ dataTestid }
          value={ get(name) }
          onChange={ onCha }
        />
      </label>
    );
  }
}

InputForm.propTypes = {
  data: PropTypes.string.isRequired,
  get: PropTypes.func.isRequired,
  onCha: PropTypes.func.isRequired,
};

export default InputForm;
