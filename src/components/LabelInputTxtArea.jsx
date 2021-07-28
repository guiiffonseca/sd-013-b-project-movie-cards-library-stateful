import React, { Component } from 'react';

class LabelInputTxtArea extends Component {
  render() {
    const {label, id, name, value, onChange} = this.props;
    return (
      <label htmlFor={id} data-testid={ `${id}-label`}>
        {label}
        <textarea
          id={id}
          value={value}
          name={name}
          data-testid={id}
          onChange={onChange}
        />
      </label>
    );
  }
}

export default LabelInputTxtArea;
