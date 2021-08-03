import React from 'react';
import PropTypes from 'prop-types';

export default class ButtonInput extends React.Component {
  render() {
    const { onClick, name, text } = this.props;
    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ `${name}` }>
        <button
          data-testid="send-button"
          id={ `${name}` }
          name={ `${name}` }
          onClick={ onClick }
          type="submit"
        >
          {text}
        </button>
      </label>
    );
  }
}

ButtonInput.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
