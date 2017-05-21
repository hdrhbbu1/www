import React, { Component } from 'react'
import Helmet from 'react-helmet'

import PostPreview from '../components/PostPreview'

export default class IndexRoute extends Component {
  render() {
    const { title } = this.props.data.site.siteMetadata
    const posts = this.props.data.allMarkdownRemark.edges.map(e => e.node)

    return (
      <div>
        <Helmet
          title={title}
        />
        {posts.map(p => <PostPreview key={p.id} {...p}/>)}
      </div>
    )
  }
}

export const pageQuery = graphql`
  query Index {
    site {
      siteMetadata {
        title
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
          slug
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
