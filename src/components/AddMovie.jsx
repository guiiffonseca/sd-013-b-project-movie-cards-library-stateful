import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImagePathInput from './ImagePathInput';
import StorylineText from './StorylineText';
import RatingFeedback from './RatingFeedback';

export default class AddMovie extends Component {
  render() {
    const {
      titleValue,
      handleChange,
      subtitleValue,
      imagePathValue,
      storylineValue,
      ratingValue,
      feedbackValue,
    } = this.props;
    return (
      <form htmlFor="true" data-testid="add-movie-form">
        <TitleInput
          titleValue={ titleValue }
          handleChange={ handleChange }
        />
        <SubtitleInput
          subtitleValue={ subtitleValue }
          handleChange={ handleChange }
        />
        <ImagePathInput
          imagePathValue={ imagePathValue }
          handleChange={ handleChange }
        />
        <StorylineText
          storylineValue={ storylineValue }
          handleChange={ handleChange }
        />
        <RatingFeedback
          ratingValue={ ratingValue }
          feedbackValue={ feedbackValue }
          handleChange={ handleChange }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  titleValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  subtitleValue: PropTypes.string.isRequired,
  imagePathValue: PropTypes.string.isRequired,
  storylineValue: PropTypes.string.isRequired,
  ratingValue: PropTypes.number.isRequired,
  feedbackValue: PropTypes.string.isRequired,
};

// AddMovie.defaultProps = {
//   titleValue: 'undefined',
//   handleChange: 'undefined',
//   subtitleValue: 'undefined',
//   imagePathValue: 'undefined',
//   storylineValue: 'undefined',
//   ratingValue: 'undefined',
//   // feedbackValue: 'undefined',
// };
