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
          width: '90%',
          maxWidth: '800px',
          margin: '0 auto'
        }}
      >
       <Helmet
          title={frontmatter.title}
          description={excerpt}
        />
        <article>
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
        <hr
          css={{
            width: '25%'
          }}
        />
        <p>
          {author} is a husband, father, and technology educator.
        </p>
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
