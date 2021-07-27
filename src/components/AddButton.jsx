import React from 'react';
import propTypes from 'prop-types';

class AddButton extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="button"
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

export default AddButton;
