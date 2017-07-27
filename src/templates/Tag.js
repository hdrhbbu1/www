import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import { rhythm } from '../util/typography'
import PostPreview from '../components/PostPreview'

export default class TagTemplate extends Component {
  render() {
    const { edges } = this.props.data.allMarkdownRemark
    const { tag } = this.props.pathContext
    const posts = edges.map(e => e.node)
    return (
      <div
        css={{
          marginBottom: rhythm(2)
        }}
      >
        <Helmet
          title={`Posts tagged with ${tag}`}
        />
        <div>
          <Link
            to="/"
            css={{
              position: 'fixed',
              left: '20px',
              textAlign: 'center',
              padding: '8px 16px',
              color: '#999',
              borderRadius: '3px',
              background: '#F4F4F4',
              fontFamily: 'Open Sans',
              '@media(max-width: 900px)': {
                position: 'static',
                width: '85px',
                margin: '20px auto 0',
                textAlign: 'center',
                display: 'block'
              }
            }}
          >
            Home
          </Link>
        </div>
        <div
          css={{
            width: '90%',
            maxWidth: '800px',
            margin: '20px auto 0',
            display: 'block'
          }}
        >
          <header
            css={{
              width: '90%',
              marginTop: rhythm(2),
              marginRight: 'auto',
              marginBottom: rhythm(2),
              marginLeft: 'auto',
              textAlign: 'center'
            }}
          >
            <h1
              css={{
                fontSize: '2.8em',
                '@media(max-width: 900px)': {
                  fontSize: '2.2em'
                }
              }}
            >
              Posts tagged with {tag}:
            </h1>
          </header>
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
  query TagPage($tag: String!) {
    allMarkdownRemark(
      limit: 1000,
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: {
        frontmatter: {
          tags: { in: [$tag] }
        }
      }
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
