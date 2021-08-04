import React from 'react';
import PropTypes from 'prop-types';

class StoryLine extends React.Component {
  render() {
    const { state, callback } = this.props;

    return (
      <label htmlFor="storyLine" data-testid="storyline-input-label" className="label">
        Sinopse
        <textarea
          name="storyLine"
          cols="30"
          rows="10"
          data-testid="storyline-input"
          onChange={ callback }
          value={ state }
        />
      </label>
    );
  }
}

StoryLine.propTypes = {
  state: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default StoryLine;
