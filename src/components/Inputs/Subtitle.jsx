import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { handle, inputValue, name } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitleInput">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          value={ inputValue || '' }
          onChange={ handle }
          name={ name }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  handle: PropTypes.func.isRequired,
  inputValue: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Subtitle;
