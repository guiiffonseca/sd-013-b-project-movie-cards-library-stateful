import React from 'react';
import PropTypes from 'prop-types';

export default class StorylineInput extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;

    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          name="storyline"
          value={ storyline }
          onChange={ handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

StorylineInput.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
