import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        data-testid="send-button"
        onClick={ onClick }
        type="submit"
      >
        Adicionar filme
      </button>
    );
  }
}

export default Button;
