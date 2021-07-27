import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubTitle extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          value={ value }
          onChange={ onChange }
          name="subtitle"
          id="subtitle"
        />
      </label>
    );
  }
}

SubTitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SubTitle;