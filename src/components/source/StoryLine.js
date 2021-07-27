import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StoryLine extends Component {
  render() {
    const { valor, funcao } = this.props;
    return (
      <label htmlFor="Sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          id="Sinopse"
          name="storyline"
          cols="30"
          rows="10"
          value={ valor }
          onChange={ funcao }
        />
      </label>
    );
  }
}

StoryLine.propTypes = {
  valor: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};

export default StoryLine;
