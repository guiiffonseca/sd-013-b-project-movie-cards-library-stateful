import React from 'react';
import PropTypes from 'prop-types';

export default class ButtonSend extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { onClick } = this.props;
    return (
      <button type="button" onClick={ onClick } data-testid="send-button">
        Adicionar filme
      </button>
    );
  }
}

ButtonSend.propTypes = {
  onClick: PropTypes.func.isRequired,
};
