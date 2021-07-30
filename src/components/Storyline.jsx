import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { valor, handleChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          name="storyline"
          value={ valor }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  valor: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Storyline;
