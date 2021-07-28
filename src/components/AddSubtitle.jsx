import React from 'react';

class AddSubtitle extends React.Component {
  render() {
    const { value } = this.props;
    const { funcao } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="subtitle"
          name="subtitle"
          value={ velue }
          data-testid="subtitle-input"
          onChange={ funcao }
        />
      </label>
    );
  }
}

export default AddSubtitle;
