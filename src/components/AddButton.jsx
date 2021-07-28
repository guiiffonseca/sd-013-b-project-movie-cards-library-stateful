import React from 'react';
import propTypes from 'prop-types';

class AddButton extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ handleClick }
      >
        Adicionar filme
      </button>
    );
  }
}

AddButton.propTypes = {
  handleClick: propTypes.func.isRequired,
};

export default AddButton;
