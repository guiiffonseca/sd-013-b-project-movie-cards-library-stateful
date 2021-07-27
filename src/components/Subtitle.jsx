import React from 'react';
import PropTypes from 'prop-types';

export default class Subtitle extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label
        data-testid="subtitle-input-label"
        htmlFor="subtitle"
      >
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          value={ subtitle }
          id="subtitle"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
