import React, {Component} from 'react';

class Button extends Component {
  render() {
    const { onClick }=this.props;
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }
}

export default Button;
