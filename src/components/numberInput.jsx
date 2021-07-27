import React from 'react';

export default class numberInput extends React.Component {
  render() {
    const { text, inputTestId, labelTestId } = this.props;
    return (
      <label data-testid={ labelTestId } htmlFor={ inputTestId }>
        { text }
        <input
          data-testid={ inputTestId }
          id={ inputTestId }
          name={ inputTestId }
          type="number"
        />
      </label>
    );
  }
}
