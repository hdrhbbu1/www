import React, { Component } from 'react'
import Helmet from 'react-helmet'

import { rhythm } from '../util/typography'
import Container from '../components/Container'
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
      <Container>
        <Helmet
          title={byline}
        />
        <SiteSidebar
          title={title}
          description={description}
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
      </Container>
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
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { draft: { ne: true } }, fileAbsolutePath: { regex: "/articles/" } },
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
