import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends Component {
  render() {
    const { subtitle, handleOnChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ handleOnChange }
        />
      </label>
    );
  }
}

export default InputSubtitle;

InputSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};
