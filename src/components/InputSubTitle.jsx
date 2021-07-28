import React from 'react';
import PropTypes from 'prop-types';

export default class InputSubTitle extends React.Component {

  render() {
    const { subtitle } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle-input"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

InputSubTitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};
