import React from 'react';
import PropTypes from 'prop-types';
import TitleTextInput from './TitleTextInput';
import SubitleTextInput from './SubtitleTextInput';
import ImageInput from './ImageInput';

class AddMovie extends React.Component {
  render() {
    const { onClick } = this.props;

    return (
      <div>
        <form data-testid="add-movie-form">
          <TitleTextInput />
          <SubitleTextInput />
          <ImageInput />
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
