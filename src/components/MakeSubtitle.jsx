import React from 'react';
import PropTypes from 'prop-types';

export default class MakeSubtitle extends React.Component {
  render() {
    const {
      subtitle,
      handleChange,
    } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo:
        <input
          type="text"
          id="subtitle"
          name="subtitle"
          value={ subtitle }
          onChange={ handleChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

MakeSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
