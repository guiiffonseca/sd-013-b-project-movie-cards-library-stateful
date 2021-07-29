import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { state, evento } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle"
          value={ state }
          onChange={ evento }
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  state: PropTypes.string,
  evento: PropTypes.func,
};

Subtitle.defaultProps = {
  state: '',
  evento: undefined,
};

export default Subtitle;
