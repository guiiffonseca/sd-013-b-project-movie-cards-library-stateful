import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const p = this.props;
    return (
      <div>
        <label data-testid="subtitle-input-label" htmlFor="addmoviesubtitleinput">
          Subtítulo:
          <input
            type="text"
            id="addmoviesubtitleinput"
            value={ p.value }
            data-testid="subtitle-input"
            onChange={ p.onChange }
            name="subtitle"
          />
        </label>
      </div>
    );
  }
}

Subtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Subtitle;
