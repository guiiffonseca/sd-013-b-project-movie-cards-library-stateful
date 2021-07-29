import React from 'react';
import PropTypes from 'prop-types';

class StoryLine extends React.Component {
  render() {
    const { storyline, onChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          id="textarea"
          onChange={ onChange }
        />
      </label>
    );
  }
}
StoryLine.propTypes = {
  storyline: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default StoryLine;
