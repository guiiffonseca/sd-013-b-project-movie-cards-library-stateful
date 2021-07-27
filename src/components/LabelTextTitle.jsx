import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LabelTextTitle extends Component {
  render() {
    const { state, change } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          value={ state }
          type="text"
          name="title"
          id="title"
          data-testid="title-input"
          onChange={ change }
        />
      </label>
    );
  }
}

LabelTextTitle.propTypes = {
  state: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};
