import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormSubtitle extends Component {
  render() {
    const { subtitle, callback } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ callback }
        />
      </label>
    );
  }
}

FormSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
