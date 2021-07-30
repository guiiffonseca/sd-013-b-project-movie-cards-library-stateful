import React from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends React.Component {
  render() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle-input-lab" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="subtitle-input-lab"
          name="subtitle-input"
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
};

export default InputSubtitle;
