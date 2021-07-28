import React from 'react';
import PropTypes from 'prop-types';
import TitleTextInput from './TitleTextInput';

class AddMovie extends React.Component {
  render() {
    const { onClick } = this.props;

    return (
      <div>
        <form data-testid="add-movie-form">
          <TitleTextInput />
        </form>
        {onClick}
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
