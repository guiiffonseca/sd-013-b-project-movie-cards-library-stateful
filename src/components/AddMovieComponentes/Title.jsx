import React from 'react';

class Title extends React.Component {
  render() {
    const { state, evento } = this.props;
    return (
      <label htmlFor="imputTitle" data-testid="title-input-label">
        Títul
        <input
          id="imputTitle"
          value={ state }
          onChange={ evento }
          name="title"
          type="text"
          /* data-testid="title-input" */
        />
      </label>
    );
  }
}

export default Title;
