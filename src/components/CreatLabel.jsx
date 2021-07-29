import React from 'react';
import PropTypes from 'prop-types';

export default class CreatLabel extends React.Component {
  render() {
    const { forHtml, text, id } = this.props;
    return (
      <label htmlFor={ forHtml } data-testid={ `${id}-input-label` }>{text}</label>
    );
  }
}

CreatLabel.propTypes = {
  forHtml: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
