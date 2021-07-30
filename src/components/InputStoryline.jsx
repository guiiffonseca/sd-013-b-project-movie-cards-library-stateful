import React from 'react';
import PropTypes from 'prop-types';

class InputStoryline extends React.Component {
  render() {
    const { storyline, onChange } = this.props;
    return (
      <label htmlFor="storyline-input-lab" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline-input-lab"
          name="storyline-input"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputStoryline.propTypes = {
  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputStoryline;
