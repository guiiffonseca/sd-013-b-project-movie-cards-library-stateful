import React from 'react';
import PropTypes from 'prop-types';

class Number extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="numero" data-testid="rating-input-label">
        Avaliação:
        <input
          type="number"
          value={ value }
          onChange={ onChange }
          id="numero"
          name="rating"
          data-testid="rating-input"
        />
      </label>
    );
  }
}

Number.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
export default Number;
