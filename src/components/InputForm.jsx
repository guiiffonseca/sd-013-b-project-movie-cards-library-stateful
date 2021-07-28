import React from 'react';
import data from './GeneratInputForms';

class InputForm extends React.Component {
  render() {
    const { data: { name, dataTestid, id, type, title }, get, onCha } = this.props;
    return (
      <label htmlFor={ name } data-testid={ `${dataTestid}-label` }>
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

// InputForm.propTypes = {
//   name: PropTypes.func.isRequired,
//   dataTest: PropTypes.func.isRequired,
// };

export default InputForm;
