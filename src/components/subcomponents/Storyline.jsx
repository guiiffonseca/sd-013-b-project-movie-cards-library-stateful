import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { storyline, onChange } = this.props;
    return (
      <label htmlFor="Input storyline" data-testid="storyline-input-label">
        Sinopse
        <input
          value={ storyline }
          type="textarea"
          name="storyline"
          id="Input storyline"
          data-testid="storyline-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Storyline;
