import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Storyline extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="textArea-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ value }
          data-testid="storyline-input"
          id="textArea-input"
          onChange={ onChange }
          name="storyline"
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
