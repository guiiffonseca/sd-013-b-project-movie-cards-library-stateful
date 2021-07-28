import React from 'react';
const data = require('./GeneratInputForms');

class InputForm extends React.Component {
  render() {
    const { name, dataTest } = this.props;
    return (
      <label htmlFor={ name } data-testid="title-input-label">
        Título:
        <input
          type="text"
          name={ name }
          data-testid={ dataTest }
          value={ name }
          onChange={ this.onChangeEvent }
        />
      </label>
    );
  }
}

InputForm.propTypes = {
  name: PropTypes.func.isRequired,
  dataTest: PropTypes.func.isRequired,
};

export default InputForm;
