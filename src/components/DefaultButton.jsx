import React from 'react';
import PropTypes from 'prop-types';

export default class DefaultButton extends React.Component {
  render() {
    const { labelText, onClick } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ onClick }
      >
        {labelText}
      </button>
    );
  }
}

DefaultButton.propTypes = {
  labelText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
