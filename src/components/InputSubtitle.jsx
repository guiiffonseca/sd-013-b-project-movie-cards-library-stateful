import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputSubtitle extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="subtitle"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          id="subtitle"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};
