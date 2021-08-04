import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { state, callback } = this.props;

    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label" className="label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={ state }
          onChange={ callback }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  state: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Subtitle;
