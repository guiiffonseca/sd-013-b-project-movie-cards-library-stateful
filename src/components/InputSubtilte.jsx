import React from 'react';
import PropTypes from 'prop-types';

class InputSubtilte extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

export default InputSubtilte;

InputSubtilte.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
