import React from 'react';
import PropTypes from 'prop-types';

export default class Title extends React.Component {
  render() {
    const { value, funcao } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyLine">
        Sinopse
        <input
          name="storyLine"
          id="storyLine"
          data-testid="storyline-input"
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
