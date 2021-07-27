import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class InputSubtitle extends Component {
  render() {
    const { subtitle, onChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          data-testid="subtitle-input"
          value={ subtitle }
          name="subtitle"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  subtitle: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
