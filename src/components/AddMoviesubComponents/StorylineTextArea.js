import React from 'react';
import PropTypes from 'prop-types';

export default class StorylineTextArea extends React.Component {
  render() {
    const { value, callBack } = this.props;
    return (
      <label htmlFor="storyLine" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyLine"
          name="storyline"
          value={ value }
          onChange={ callBack }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

StorylineTextArea.propTypes = {
  value: PropTypes.string.isRequired,
  callBack: PropTypes.func.isRequired,
};
