import React from 'react';
import PropTypes from 'prop-types';

class FormTitle extends React.Component {
  render() {
    const { title, callback } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          value={ title }
          id="title"
          data-testid="title-input"
          onChange={ callback }
        />
      </label>
    );
  }
}

FormTitle.propTypes = {
  title: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default FormTitle;
