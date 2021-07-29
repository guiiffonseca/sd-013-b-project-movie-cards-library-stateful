import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { state, evento } = this.props;
    return (
      <label htmlFor="imputTitle" data-testid="title-input-label">
        Título
        <input
          id="imputTitle"
          value={ state }
          onChange={ evento }
          name="title"
          type="text"
          data-testid="title-input"
        />
      </label>
    );
  }
}

Title.propTypes = {
  state: PropTypes.string,
  evento: PropTypes.func,
};

Title.defaultProps = {
  state: '',
  evento: undefined,
};

export default Title;
