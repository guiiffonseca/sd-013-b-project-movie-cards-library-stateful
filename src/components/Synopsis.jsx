import React from 'react';
import PropTypes from 'prop-types';

class Synopsis extends React.Component {
  render() {
    const { storyline, onChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          data-testid="storyline-input"
          type="text"
          name="storyline"
          value={ storyline }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Synopsis.propTypes = {
  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Synopsis;
