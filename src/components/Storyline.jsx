import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Storyline extends Component {
  render() {
    const { storyline, onChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input
          type="text"
          name="storyline"
          value={ storyline }
          onChange={ onChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
