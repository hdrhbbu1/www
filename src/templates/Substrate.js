import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import { rhythm } from '../util/typography'

export default class SubstrateTemplate extends Component {
  render() {
    const {
      fields: { slug },
      excerpt,
      html,
      frontmatter: { title, rawDate, date },
    } = this.props.data.markdownRemark

    return (
      <div
        css={{
          background: '#000',
          color: '#FFF',
          marginBottom: rhythm(2),
        }}
      >
        <article
          css={{
            width: '90%',
            margin: '0 auto',
          }}
        >
          <header>
            <h1>
              <Link to={slug}>{title}</Link>
            </h1>
            <div>
              <span>Published on <time dateTime={rawDate}>{date}</time></span>
            </div>
          </header>
          <div
            css={{
              margin: '0 auto',
            }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query SubstrateTemplate($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        rawDate: date
      }
    }
  }
`
