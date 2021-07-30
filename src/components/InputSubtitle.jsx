import React from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends React.Component {
  render() {
    const { subtitle, onChange } = this.props;
    return (
      <label htmlFor="subtitle-input-lab" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="subtitle-input-lab"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputSubtitle;
