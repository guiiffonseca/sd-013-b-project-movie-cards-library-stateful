import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class InputStoryline extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ value }
          name="storyline"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputStoryline.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
