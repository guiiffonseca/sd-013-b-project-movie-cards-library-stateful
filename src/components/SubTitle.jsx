import React from 'react';
import PropTypes from 'prop-types';

class SubTitle extends React.Component {
  render() {
    const { valor, handleChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ valor }
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

SubTitle.propTypes = {
  valor: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SubTitle;
