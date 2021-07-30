import React from 'react';
import PropTypes from 'prop-types';

class Labels extends React.Component {
  render() {
    const { id, text } = this.props;
    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        { text }
      </label>
    );
  }
}

Labels.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Labels;
