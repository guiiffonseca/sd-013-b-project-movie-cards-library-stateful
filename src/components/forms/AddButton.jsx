import React from 'react';

class AddButton extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="submit"
        onClick={ onClick }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

export default AddButton;
