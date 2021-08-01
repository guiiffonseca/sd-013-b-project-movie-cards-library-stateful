import React from 'react';
import PropTypes from 'prop-types';

export default class ButtonSend extends React.Component {
  render() {
    const { onClick, resetAddMovie } = this.props;
    return (
      <button
        name="sendButton"
        type="button"
        onClick={ onClick }
        onChange={ resetAddMovie }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonSend.propTypes = {
  onClick: PropTypes.func.isRequired,
  resetAddMovie: PropTypes.func.isRequired,
};
