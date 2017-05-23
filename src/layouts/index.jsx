import React, { Component } from 'react'
import Helmet from 'react-helmet'

import 'normalize.css'
import 'typeface-open-sans'
import 'typeface-nunito'

import typography, { rhythm, scale } from '../util/typography'
import presets from '../util/presets'
import Navigation from '../components/Navigation'

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
        <Navigation/>
        {this.props.children()}
      </div>
    )
  }
}
