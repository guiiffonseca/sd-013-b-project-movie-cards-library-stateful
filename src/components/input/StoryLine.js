import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StoryLine extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="Sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          id="Sinopse"
          name="storyline"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

StoryLine.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StoryLine;