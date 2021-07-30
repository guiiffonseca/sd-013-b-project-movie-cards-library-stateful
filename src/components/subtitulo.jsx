import React from 'react';
import PropTypes from 'prop-types';

class Subtitulo extends React.Component {
  render() {
    const { subtitle, onChange } = this.props;
    return (
      <label htmlFor="subtitulo" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitulo"
          name="subtitulo"
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ onChange }
        />
      </label>
    );
  }
}
Subtitulo.propTypes = {
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Subtitulo;
