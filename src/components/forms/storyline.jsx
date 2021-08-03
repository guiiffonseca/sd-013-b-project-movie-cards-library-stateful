import React from 'react';
import PropTypes from 'prop-types';

class StoryLine extends React.Component {
  render() {
    const { storyline, onChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

StoryLine.propTypes = {
  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StoryLine;
