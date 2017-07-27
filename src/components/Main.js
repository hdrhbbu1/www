import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <div
        css={{
          width: '70%',
          '@media(max-width: 800px)': {
            width: '100%'
          }
        }}
      >
        {this.props.children}
      </div>
    )
  }
}
