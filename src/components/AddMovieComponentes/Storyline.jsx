import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { state, evento } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <input
          id="storyline"
          value={ state }
          onChange={ evento }
          name="storyline"
          type="text"
          data-testid="storyline-input"
        />
      </label>
    )
  }
}

Storyline.propTypes = {
  state: PropTypes.string,
  evento: PropTypes.func,
};

Storyline.defaultProps = {
  state: '',
  evento: undefined,
};

export default Storyline;
