import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const {
      id,
      labelTest,
      name,
    } = this.props;

    return (
      <label
        htmlFor={ id }
        data-testid={ labelTest }
      >
        {name}
        <input
          data-testid={ id }
          type="text"
          id={ id }
        />
      </label>
    );
  }
}

Textarea.propTypes = {
  id: PropTypes.string
    .isRequired,
  labelTest: PropTypes.string
    .isRequired,
  name: PropTypes.string
    .isRequired,
};

export default Textarea;
