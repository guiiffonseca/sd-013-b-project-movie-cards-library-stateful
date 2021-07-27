import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class AddButton extends Component {
  render() {
    const { onClick } = this.props;
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

AddButton.propTypes = {
  onClick: propTypes.func.isRequired,
};
