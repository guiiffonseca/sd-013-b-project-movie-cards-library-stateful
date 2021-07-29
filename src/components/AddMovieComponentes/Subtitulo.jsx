import React from 'react';

class Subtitle extends React.Component {
  render() {
    const { state, evento } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle"
          value={ state }
          onChange={ evento }
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

export default Subtitle;
