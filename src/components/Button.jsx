import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { onClick, onClickEsLint } = this.props;
    return (
      <button
        button
        type="button"
        data-testid="send-button"
        onClick={ onClick }
        onClickEsLint={ onClickEsLint }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func
    .isRequired,
  onClickEsLint: PropTypes.func
    .isRequired,
};

export default Button;
