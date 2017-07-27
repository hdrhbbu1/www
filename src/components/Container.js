import React, { Component } from 'react'

import { rhythm } from '../util/typography'

export default class Container extends Component {
  render() {
    return (
      <div
        css={{
          display: 'flex',
          marginTop: rhythm(2),
          marginRight: 'auto',
          marginLeft: 'auto',
          marginBottom: rhythm(2),
          width: '90%',
          maxWidth: '1024px',
          '@media(max-width: 800px)': {
            flexDirection: 'column',
            alignItems: 'stretch'
          }
        }}
      >
        {this.props.children}
      </div>
    )
  }
}
