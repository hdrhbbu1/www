import React, { Component } from 'react'
import Helmet from 'react-helmet'

import SiteSidebar from '../components/SiteSidebar'
import PostPreview from '../components/PostPreview'

export default class IndexRoute extends Component {
  render() {
    const {
      byline,
      description
    } = this.props.data.site.siteMetadata

    const posts = this.props.data.allMarkdownRemark.edges
      .map(e => e.node)

    return (
      <div
        css={{
          display: 'flex',
          margin: '0 auto',
          width: '90%',
          maxWidth: '1024px'
        }}
      >
        <Helmet
          title={byline}
        />
        <SiteSidebar
          css={{
            width: '20%'
          }}
        />
        <div>
          {posts.map(p => <PostPreview key={p.id} {...p}/>)}
        </div>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query Index {
    site {
      siteMetadata {
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
