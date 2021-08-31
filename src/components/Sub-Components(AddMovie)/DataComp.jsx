/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DataComp extends Component {
  render() {
    const { subtitle, storyline, imagePath, handleChange } = this.props;
    return (
      <div>
        <label data-testid="subtitle-input-label">
          <imput
            data-testid="subtitle-input"
            type="text"
            id="subtitle"
            name="subtitle"
            value={ subtitle }
            onChange={ handleChange }
          />
        </label>
        <label data-testid="image-input-label">
          <imput
            data-testid="image-input"
            type="text"
            id="imagePath"
            name="imagePath"
            value={ imagePath }
            onChange={ handleChange }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="story">

          <textarea
            data-testid="storyline-input"
            id="story"
            name="story"
            value={ storyline }
            onChange={ handleChange }
            rows="5"
            cols="33"
          />
        </label>
      </div>
    );
  }
}

DataComp.propTypes = {
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
