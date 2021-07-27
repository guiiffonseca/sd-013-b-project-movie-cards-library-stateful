import React from 'react';

export default class ButtonInput extends React.Component {
  render() {
    const { text, inputTestId, onClick } = this.props;
    return (
      <button
        data-testid={ inputTestId }
        id={ inputTestId }
        name={ inputTestId }
        onClick={ onClick }
        type="submit"
      >
        { text }
      </button>
    );
  }
}
