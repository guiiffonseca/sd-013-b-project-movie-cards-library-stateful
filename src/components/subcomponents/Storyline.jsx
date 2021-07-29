import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { onChange, storyline } = this.props;
    return (
      <label htmlFor="Input storyline" data-testid="storyline-input-label">
        Sinopse
        <input
          data-testid="storyline-input"
          id="Input storyline"
          name="storyline"
          onChange={ onChange }
          type="textarea"
          value={ storyline }
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
