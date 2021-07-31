import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { storyline, onChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="sinopse">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          cols="30"
          rows="10"
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
