import React from 'react';
import PropTypes from 'prop-types';

export default class MakeSinopse extends React.Component {
  render() {
    const { storyLine, handleChange } = this.props;
    return (
      <label htmlFor="storyLine" data-testid="storyline-input-label">
        Sinopse:
        <textarea
          type="text"
          id="storyLine"
          name="storyLine"
          value={ storyLine }
          onChange={ handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

MakeSinopse.propTypes = {
  storyLine: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
