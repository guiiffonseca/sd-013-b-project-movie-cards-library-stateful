import React from 'react';
import PropTypes from 'prop-types';

class StoryLine extends React.Component {
  render() {
    const { handle, inputValue, name } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyLineInput">
        Sinopse
        <textarea
          data-testid="storyline-input"
          type="text"
          value={ inputValue || '' }
          onChange={ handle }
          name={ name }
        />
      </label>
    );
  }
}

StoryLine.propTypes = {
  handle: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default StoryLine;
