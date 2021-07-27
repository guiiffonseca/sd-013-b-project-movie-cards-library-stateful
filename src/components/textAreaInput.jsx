import React from 'react';

export default class textAreaInput extends React.Component {
  render() {
    const { text, inputTestId, labelTestId } = this.props;
    return (
      <label data-testid={ labelTestId } htmlFor={ inputTestId }>
        { text }
        <textarea
          cols="10"
          data-testid={ inputTestId }
          id={ inputTestId }
          name={ inputTestId }
          rows="10"
        />
      </label>
    );
  }
}
