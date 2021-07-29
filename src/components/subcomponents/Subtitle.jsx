import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { subtitle, onChange } = this.props;
    return (
      <label htmlFor="Input subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          value={ subtitle }
          type="text"
          name=""
          id="Input subtitle"
          data-testid="subtitle-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Subtitle;
