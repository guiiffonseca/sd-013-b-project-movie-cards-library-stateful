import React from 'react'

class Subtitle extends React.Component {

  render() {
    const { subtitle } = this.props
    return (
      <label htmlFor="subtitle"
        data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          value={subtitle}
        />
      </label>
    )
  }
}

export default Subtitle;