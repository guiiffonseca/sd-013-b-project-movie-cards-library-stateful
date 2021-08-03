import React from 'react';
import PropTypes from 'prop-types';

class AddButton extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="submit"
        onClick={ onClick }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddButton;
