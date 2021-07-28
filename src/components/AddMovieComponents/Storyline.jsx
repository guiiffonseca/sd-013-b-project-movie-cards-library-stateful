import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Storyline extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="storyline-input"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          id=""
          cols="30"
          rows="10"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Storyline;
