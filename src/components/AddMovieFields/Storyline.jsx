import React from 'react';
import PropTypes from 'prop-types';
import TextArea from '../formFields/TextArea';

class Storyline extends React.Component {
  render() {
    const { value, change } = this.props;

    return (
      <TextArea
        labelId="storyline-input-label"
        txt="Sinopse:"
        testid="storyline-input"
        id="storyline"
        value={ value }
        onChange={ change }
      />
    );
  }
}

Storyline.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default Storyline;
