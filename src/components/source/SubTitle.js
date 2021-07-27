import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubTitle extends Component {
  render() {
    const { valor, funcao } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          value={ valor }
          onChange={ funcao }
          name="subtitle"
          id="subtitle"
        />
      </label>
    );
  }
}

SubTitle.propTypes = {
  valor: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};

export default SubTitle;
