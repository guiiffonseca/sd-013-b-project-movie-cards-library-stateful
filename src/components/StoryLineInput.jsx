import React from 'react';
import PropTypes from 'prop-types';

class StoryLineInput extends React.Component {
  render() {
    const { value, handleChanges } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyLine"
          id="storyline-input"
          value={ value }
          data-testid="storyline-input"
          onChange={ handleChanges }
        />
      </label>
    );
  }
}

StoryLineInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChanges: PropTypes.func.isRequired,
};

export default StoryLineInput;
