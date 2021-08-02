import React from 'react';

class AddSubtitle extends React.Component {
  render() {
    const { subtitle, onChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default AddSubtitle;
