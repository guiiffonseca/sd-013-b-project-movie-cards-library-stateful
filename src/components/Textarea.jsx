import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const {
      value,
      onChange,
    } = this.props;

    return (
      <label
        htmlFor="storyline-input"
        data-testid="storyline-input-label"
      >
        Sinopse
        <input
          data-testid="storyline-input"
          type="text"
          id="storyline-input"
          value={ value }
          name="storyline"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Textarea.propTypes = {
  // id: PropTypes.string
  //   .isRequired,
  // labelTest: PropTypes.string
  //   .isRequired,
  // label: PropTypes.string
  //   .isRequired,
  // name: PropTypes.string
  //   .isRequired,
  value: PropTypes.string
    .isRequired,
  onChange: PropTypes.func
    .isRequired,
};

export default Textarea;
