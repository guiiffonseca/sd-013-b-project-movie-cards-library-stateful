import React from 'react';
import PropTypes from 'prop-types';

class TitleTextInput extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          id="title-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TitleTextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TitleTextInput;
