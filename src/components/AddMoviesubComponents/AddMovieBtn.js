import React from 'react';
import PropTypes from 'prop-types';

class AddMovieBtn extends React.Component {
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

export default AddMovieBtn;

AddMovieBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
