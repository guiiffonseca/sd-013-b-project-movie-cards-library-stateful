import React from 'react';

class Title extends React.Component {
  render() {
    const { subtitle } = this.props;
    // imagePath, storyline, rating title,
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

Title.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default Title;
