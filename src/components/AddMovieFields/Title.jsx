import React from 'react';
import PropTypes from 'prop-types';
import Input from '../formFields/Input';

class Title extends React.Component {
  render() {
    const { value, change } = this.props;
    return (
      <Input
        labelId="title-input-label"
        txt="Título"
        testId="title-input"
        id="title"
        type="text"
        value={ value }
        onChange={ change }
      />

    );
  }
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default Title;
