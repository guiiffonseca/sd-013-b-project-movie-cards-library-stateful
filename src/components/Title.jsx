import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { state, callback } = this.props;

    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          value={ state }
          data-testid="title-input"
          onChange={ callback }
        />
      </label>
    );
  }
}

Title.propTypes = {
  state: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Title;
