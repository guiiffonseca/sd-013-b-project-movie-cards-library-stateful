import React from 'react';
import PropTypes from 'prop-types';

class InputStoryLine extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input
          type="text"
          data-testid="storyline-input"
          id="storyline-input"
          name="storyline"
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

export default InputStoryLine;

InputStoryLine.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
