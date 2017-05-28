import React, { Component } from 'react' 
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import typography, { rhythm, scale } from '../util/typography'

export default class PostTemplate extends Component {
  render() {
    const {
      fields: { slug },
      excerpt,
      html,
      frontmatter
    } = this.props.data.markdownRemark

    const { author } = this.props.data.site.siteMetadata

    return (
      <div
        css={{
          marginBottom: rhythm(2)
        }}
      >
       <Helmet
          title={frontmatter.title}
          description={excerpt}
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
        <article
          css={{
            width: '90%',
            maxWidth: '800px',
            margin: '0 auto'
          }}
        >
          <header
            css={{
              display: 'block',
              textAlign: 'center',
              marginTop: rhythm(2),
              marginRight: 'auto',
              marginBottom: rhythm(2),
              marginLeft: 'auto'
            }}
          >
            <Link
              to={slug}
              css={{
                textDecoration: 'none'
              }}
            >
              <h1
                css={{
                  fontSize: '2.5em'
                }}
              >
                {frontmatter.title}
              </h1>
            </Link>
            <div
              css={{
                marginTop: rhythm(2),
                fontSize: '.9em'
              }}
            >
              <time dateTime={frontmatter.date}>
                {frontmatter.date}
              </time>
            </div>
          </header>
          <div
            css={{
              width: '90%',
              margin: '0 auto'
            }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query TemplateBlogPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMM D, YYYY")
        rawDate: date
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`
