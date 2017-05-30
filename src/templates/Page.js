import React, { Component } from 'react'
import Helmet from 'react-helmet'

import { rhythm } from '../util/typography'
import SiteSidebar from '../components/SiteSidebar'

export default class PageTemplate extends Component {
  render() {
    const {
      title,
      description
    } = this.props.data.site.siteMetadata

    const { html, frontmatter } = this.props.data.markdownRemark

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
        <Helmet
          title={frontmatter.title}
        />
        <SiteSidebar
          title={title}
          description={description}
          css={{
            width: '30%',
            marginRight: '5%',
            paddingRight: '5%',
            borderRight: '1px rgba(0, 0, 0, .1) solid',
            '@media(max-width: 800px)': {
              flexDirection: 'column',
              alignItems: 'stretch',
              borderRight: 'none',
              width: '100%',
              marginRight: '0',
              paddingRight: '0',
              marginBottom: rhythm(2),
              paddingBottom: rhythm(2),
              borderBottom: '1px rgba(0, 0, 0, .1) solid',
            }
          }}
        />
        <div
          css={{
            width: '70%',
            '@media(max-width: 800px)': {
              width: '100%'
            }
          }}
        >
          <h2
            css={{
              marginTop: 0
            }}
          >
            {frontmatter.title}
          </h2>
          <div
            css={{
              fontSize: '1.0em'
            }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
