import React, { Component } from 'react'
import Helmet from 'react-helmet'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Helmet
          title="Nicholas Young"
          titleTemplate="%s | Nicholas Young"
          meta={[
            {
              name: 'twitter:site',
              content: '@nicholaswyoung'
            },
            {
              name: 'og:type',
              content: 'website'
            },
            {
              name: 'og:site_name',
              content: 'Nicholas Young'
            }
          ]}
        />
        <div
          css={{
            background: '#F0F0F0'
          }}
        >
          {this.props.children()}
        </div>
      </div>
    )
  }
}
