import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { valor, handleChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          value={ valor }
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  valor: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Title;
