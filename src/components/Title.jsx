import React from 'react';

class Title extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo:
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

export default Title;
