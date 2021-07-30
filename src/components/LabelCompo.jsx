import React from 'react';
// import PropTypes from 'prop-types';

class LabelCompo extends React.Component {
  render() {
    const { htmlFor, text, id } = this.props;
    return (
      <label htmlFor={ htmlFor } data-testid={ `${id}-input-label` }>
        { text }
      </label>
    );
  }
}

export default LabelCompo;