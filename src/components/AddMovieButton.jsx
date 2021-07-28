import React from 'react';
import PropTypes from 'prop-types';

class AddMovieButton extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="send-button"
          onClick={ onClick }
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

AddMovieButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovieButton;
