import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';

const BUILD_TIME = new Date().getTime();

export default class HTML extends Component {
  render() {
    const { body } = this.props;
    const { title } = Helmet.rewind();
    const font = <link href="https://fonts.googleapis.com/css?family=Roboto:400,400italic,500,700&subset=latin,cyrillic" rel="stylesheet" type="text/css" />;
    let css;
    if (process.env.NODE_ENV === 'production') {
      // eslint-disable-next-line import/no-webpack-loader-syntax
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />;
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=5.0" />
          { title.toComponent() }
          { font }
          { css }
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    );
  }
}
