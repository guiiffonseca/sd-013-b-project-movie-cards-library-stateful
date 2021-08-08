import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SendButton extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ handleClick }
      >
        Adicionar Filme
      </button>
    );
  }
}

SendButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default SendButton;
