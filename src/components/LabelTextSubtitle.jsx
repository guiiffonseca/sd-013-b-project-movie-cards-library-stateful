import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LabelTextSubtitle extends Component {
  render() {
    const { state, change } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          value={ state }
          type="text"
          name="subtitle"
          id="subtitle"
          data-testid="subtitle-input"
          onChange={ change }
        />
      </label>
    );
  }
}

LabelTextSubtitle.propTypes = {
  state: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};
