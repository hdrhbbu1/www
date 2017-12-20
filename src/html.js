import React, { Component } from 'react'
import { TypographyStyle } from 'react-typography'

import typography from './util/typography'

let css
if (process.env.NODE_ENV === 'production') {
  css = (
    <style dangerouslySetInnerHTML={{
      // eslint-disable-next-line import/no-webpack-loader-syntax
      __html: require('!raw!../public/styles.css') }}
    />
  )
}

const profiles = [
  'https://twitter.com/nicholaswyoung',
  'https://github.com/nicholaswyoung',
]

export default class HTML extends Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=5.0" />
          <link rel="author" href="/humans.txt"/>
          <link rel="pgpkey" href="/pgp.pub.txt"/>
          {profiles.map((p, i) => (
            <link rel="me" href={p} key={`webmention-profile-${i}`}/>
          ))}
          <TypographyStyle typography={typography}/>
          {css}
          {this.props.headComponents}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
