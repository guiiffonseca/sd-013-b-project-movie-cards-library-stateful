import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ButtonSubmmit extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button type="submit" data-testid="send-button" onClick={ onClick }>
        Adicionar filme
      </button>
    );
  }
}

ButtonSubmmit.propTypes = {
  onClick: PropTypes.func.isRequired,
};
