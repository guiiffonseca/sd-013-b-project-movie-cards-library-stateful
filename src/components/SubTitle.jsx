import React from 'react';
import PropTypes from 'prop-types';

export default class Title extends React.Component {
  render() {
    const { value, funcao } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          name="subtitle"
          id="subtitle"
          data-testid="subtitle-input"
          value={ value }
          onChange={ funcao }
        />
      </label>
    );
  }
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};
