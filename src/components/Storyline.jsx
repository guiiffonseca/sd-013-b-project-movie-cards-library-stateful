import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { storyline, onChange } = this.props;
    return (
      <label htmlFor="textarea-input-movie" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="textarea-input-movie"
          cols="30"
          rows="10"
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

export default Storyline;
