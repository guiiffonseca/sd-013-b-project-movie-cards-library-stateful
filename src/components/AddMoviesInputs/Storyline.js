import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const p = this.props;
    return (
      <div>
        <label data-testid="storyline-input-label" htmlFor="addmovietextarea">
          Sinopse:
          <textarea
            id="addmovietextarea"
            value={ p.value }
            data-testid="storyline-input"
            onChange={ p.onChange }
            name="storyline"
          />
        </label>
      </div>);
  }
}

Storyline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Storyline;
