import React from 'react';

export default class ButtonInput extends React.Component {
  render() {
    const { onClick, name, text } = this.props;
    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ `${name}` }>
        <button
          data-testid="send-button"
          id={ `${name}` }
          name={ `${name}` }
          onClick={ onClick }
          type="submit"
        >
          {text}
        </button>
      </label>
    );
  }
}
