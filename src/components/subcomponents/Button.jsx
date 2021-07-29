import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <button type="submit" data-testid="send-button" onChange={ onChange }>
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Button;
