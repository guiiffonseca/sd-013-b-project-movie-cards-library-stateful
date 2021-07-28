import React from 'react';
import PropTypes from 'prop-types';

export default class SubtitleInput extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;

    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ handleChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
