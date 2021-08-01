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
        {/* select associete w label: 'Gênero' */}
        {/* label id: data-testid="genre-input-label"  */}
        <label htmlFor="true" data-testid="genre-input-label">
          Gênero
          <select name="genre" id=""/>
        </label>
        {/* select initial value by genre */}
        {/* select id: data-testid="genre-input" */}
        {/* onChange  */}
        {/* select tags option: 'Ação' - action, Comédia - comedy , Suspense - thriller */}
        {/* each option id: data-testid="genre-option" */}
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
