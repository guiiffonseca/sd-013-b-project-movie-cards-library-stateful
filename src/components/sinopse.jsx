import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { storyline, onChange } = this.props;
    return (
      <label htmlFor="Sinopse" data-testid="storyline-input-label">
        Sinopse
        <input
          id="Sinopse"
          name="Sinopse"
          type="text"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ onChange }
        />
      </label>
    );
  }
}
Sinopse.propTypes = {
  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Sinopse;
