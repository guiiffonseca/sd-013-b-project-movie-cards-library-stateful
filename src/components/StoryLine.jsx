import React from 'react';
import PropTypes from 'prop-types';

class StoryLine extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyLine"
          id="storyline-input"
          cols="30"
          rows="10"
          value={ value }
          onChange={ handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

StoryLine.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default StoryLine;
