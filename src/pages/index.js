import React, { Component } from 'react'
import Helmet from 'react-helmet'

import { rhythm } from '../util/typography'
import SiteSidebar from '../components/SiteSidebar'
import PostPreview from '../components/PostPreview'

export default class IndexRoute extends Component {
  render() {
    const {
      title,
      byline,
      description
    } = this.props.data.site.siteMetadata

    const posts = this.props.data.allMarkdownRemark.edges
      .map(e => e.node)

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
          title={byline}
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
          {posts.map(p => (
            <PostPreview
              key={p.id}
              css={{
                marginBottom: rhythm(2)
              }}
              {...p}
            />
          ))}
        </div>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query Index {
    site {
      siteMetadata {
        title
        byline
        description
      }
    }
    allMarkdownRemark(
      sortBy: { order: DESC, fields: [frontmatter___date] },
      frontmatter: { draft: { ne: true } },
      fileAbsolutePath: { regex: "/articles/" },
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMM D, YYYY")
          }
        }
      }
    }
  }
`
