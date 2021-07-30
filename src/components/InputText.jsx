import React from 'react';
// import PropTypes from 'prop-types';

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

export default InputText;
