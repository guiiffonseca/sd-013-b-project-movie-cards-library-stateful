import React from 'react';
import PropTypes from 'prop-types';

class AddTitle extends React.Component {
  render() {
    const { value, funcao } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          id="title"
          value={ value }
          name="title"
          data-testid="title-input"
          onChange={ funcao }
        />
      </label>
    );
  }
}

AddTitle.propTypes = {
  value: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};

export default AddTitle;
