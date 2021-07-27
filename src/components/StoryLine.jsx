import React from 'react';
import PropTypes from 'prop-types';

export default class StoryLine extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <input
          data-testid="storyline-input"
          type="text"
          value={ storyline }
          id="storyline"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

StoryLine.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
