import React from 'react';
import PropTypes from 'prop-types';
import Input from '../formFields/Input';

class Subtitle extends React.Component {
  render() {
    const { value, change } = this.props;

    return (
      <Input
        labelId="subtitle-input-label"
        txt="Subtítulo:"
        testid="subtitle-input"
        id="subtitle"
        type="text"
        value={ value }
        onChange={ change }
      />
    );
  }
}

Subtitle.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default Subtitle;
