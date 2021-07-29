import React from 'react';

class SubTitle extends React.Component {
  render() {
    const { valor, handleChange } = this.props;
    return (
      <label htmlFor="subtitle" testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          valor={ valor }
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default SubTitle;
