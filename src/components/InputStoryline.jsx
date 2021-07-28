import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputStoryline extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="storyline-input"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          name="storyline"
          type="text"
          data-testid="storyline-input"
          id="storyline-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputStoryline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
