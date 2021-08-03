import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { onChange } = this.props;

    return (

      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          name="title"
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default InputTitle;

InputTitle.propTypes = {
  onChange: PropTypes.func.isRequired,
};
