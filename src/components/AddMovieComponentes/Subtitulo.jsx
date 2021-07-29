import React from 'react';

class Subtitle extends React.Component {
  render() {
    const { state, evento } = this.props;
    return (
      <label htmlFor="subtitle">
        Subtítulo:
        <input
          id="subtitle"
          value={ state }
          onChange={ evento }
          name="subtitle"
          type="text"
        />
      </label>
    );
  }
}

export default Subtitle;
