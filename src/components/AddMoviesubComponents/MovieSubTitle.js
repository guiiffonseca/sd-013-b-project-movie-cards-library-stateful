import React from 'react';
import PropTypes from 'prop-types';

export default class MovieSubTitle extends React.Component {
  render() {
    const { value, callBack } = this.props;
    return (
      <label htmlFor="subTitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="subTitle"
          value={ value }
          name="subtitle"
          data-testid="subtitle-input"
          onChange={ callBack }
        />
      </label>
    );
  }
}

MovieSubTitle.propTypes = {
  value: PropTypes.string.isRequired,
  callBack: PropTypes.func.isRequired,
};
