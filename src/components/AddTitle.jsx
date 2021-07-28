import React from 'react';

class AddTitle extends React.Component {
  render() {
    const { value } = this.props;
    const { funcao } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          id="title"
          value={ value }
          name="title"
          data-testid="title-input"
          onChange={ funcao }
        />
      </label>
    );
  }
}

export default AddTitle;
