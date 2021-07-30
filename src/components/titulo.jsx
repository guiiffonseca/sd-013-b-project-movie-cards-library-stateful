import React from 'react';
import PropTypes from 'prop-types';

class Titulo extends React.Component {
  render() {
    const { title, onChange } = this.props;
    return (
      <label htmlFor="titulo" data-testid="title-input-label">
        Título
        <input
          id="titulo"
          name="titulo"
          type="text"
          data-testid="title-input"
          value={ title }
          onChange={ onChange }
        />
      </label>
    );
  }
}
Titulo.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Titulo;
