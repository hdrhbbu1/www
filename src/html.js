import React, { Component } from 'react'
import { TypographyStyle } from 'react-typography'
import Helmet from 'react-helmet'

import typography from './util/typography'

const BUILD_TIME = new Date().getTime()

let css
if (process.env.NODE_ENV === 'production') {
  css = (
    <style dangerouslySetInnerHTML={{
      // eslint-disable-next-line import/no-webpack-loader-syntax
      __html: require('!raw!../public/styles.css') }}
    />
  )
}

export default class HTML extends Component {
  render() {
    const { title, meta, link } = Helmet.rewind()

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=5.0" />
          {this.props.headComponents}
          <link rel="author" href="/humans.txt"/>
          <TypographyStyle typography={typography}/>
          {title.toComponent()}
          {meta.toComponent()}
          {link.toComponent()}
          {css}
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
