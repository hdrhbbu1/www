import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Container from '../components/Container'
import SiteSidebar from '../components/SiteSidebar'
import Main from '../components/Main'

export default class PageTemplate extends Component {
  render() {
    const {
      siteUrl,
      title,
      description,
    } = this.props.data.site.siteMetadata

    const {
      frontmatter,
      excerpt,
      html,
      fields: {
        slug,
      },
    } = this.props.data.markdownRemark

    const url = siteUrl + slug

    return (
      <Container>
        <Helmet
          title={frontmatter.title}
          meta={[
            {
              name: 'twitter:title',
              content: title,
            },
            {
              name: 'og:title',
              content: title,
            },
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:description',
              content: excerpt,
            },
            {
              name: 'og:description',
              content: excerpt,
            },
            {
              name: 'og:url',
              content: url,
            },
            {
              name: 'description',
              content: excerpt,
            },
          ]}
        />
        <SiteSidebar
          title={title}
          description={description}
        />
        <Main>
          <h2
            css={{
              marginTop: 0,
            }}
          >
            {frontmatter.title}
          </h2>
          <div
            css={{
              margin: '0 auto',
              '@media(max-width: 800px)': {
                fontSize: '1.05em',
              },
            }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Main>
      </Container>
    )
  }
}

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`
