import React from 'react';

class Button extends React.Component {

  render() {
    const { button } = this.props;
    return (
      <button data-testid="send-button"
      >Adicionar filme
      </button>
    )
  }
}

export default Button;