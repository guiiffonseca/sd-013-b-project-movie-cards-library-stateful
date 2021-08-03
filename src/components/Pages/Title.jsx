import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="title"
        data-testid="title-input-label"
      >
        Título
        <input
          name="title"
          id="title"
          onChange={ onChange }
          type="text"
          data-testid="title-input"
          value={ value }
        />
      </label>
    );
  }
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Title;
