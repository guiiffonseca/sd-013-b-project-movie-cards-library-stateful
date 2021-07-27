import React, { Component } from 'react';

class LabelInput extends Component {
  render() {
    const {dataTestid, id, name, dataTestidInput, callBack, state, title } = this.props;
    return (
      <label htmlFor={id} data-testid={dataTestid}>
        {title}
        <input
          type="text"
          id={id}
          name={name}
          value={ state }
          data-testid={dataTestidInput}
          onChange={callBack} />
      </label>
    );
  }
}

export default LabelInput;
