import React from 'react';
import propTypes from 'prop-types';

class AddSinopse extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddSinopse.propTypes = {
  storyline: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};

export default AddSinopse;
