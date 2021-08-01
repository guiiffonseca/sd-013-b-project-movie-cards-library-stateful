import React from 'react';
import PropTypes from 'prop-types';

class TitleInput extends React.Component {
  render() {
    const { props } = this;
    const { value } = props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          id="title-input"
          type="text"
          name="title"
          value={ value }
          data-testid="title-input"
          onChange={ props.handleChange }
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TitleInput;
