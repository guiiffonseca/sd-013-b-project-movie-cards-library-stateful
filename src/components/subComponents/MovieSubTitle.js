import React from 'react';
import PropTypes from 'prop-types';

export default class MovieSubTitle extends React.Component {
  render() {
    const { subtitle, callBack } = this.props;
    return (
      <label htmlFor="subTitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="subTitle"
          value={ subtitle }
          name="subtitle"
          data-testid="subtitle-input"
          onChange={ callBack }
        />
      </label>
    );
  }
}

MovieSubTitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  callBack: PropTypes.func.isRequired,
};
