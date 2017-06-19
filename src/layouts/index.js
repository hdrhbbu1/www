import React, { Component } from 'react'
import Helmet from 'react-helmet'

import 'normalize.css'
import 'typeface-open-sans'
import 'typeface-nunito'

import presets from '../util/presets'

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
              name: 'twitter:creator',
              content: '@nicholaswyoung'
            },
            {
              name: 'twitter:creator:id',
              content: '10003492'
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
        >
        </Helmet>
        {this.props.children()}
      </div>
    )
  }
}
