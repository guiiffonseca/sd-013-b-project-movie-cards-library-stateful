import React from 'react';

class Addtitle extends React.Component {
  render() {
    const { title, onChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default Addtitle;
