import React from 'react';
import PropTypes from 'prop-types';

class LabelStoryLine extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="storyLine" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyLine"
          value={ value }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

LabelStoryLine.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LabelStoryLine;
