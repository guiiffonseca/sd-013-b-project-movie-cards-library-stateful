import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render() {
    const { onclick } = this.props;

    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ onclick }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  onclick: PropTypes.func.isRequired,
};
