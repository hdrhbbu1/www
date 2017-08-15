import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Container from '../components/Container'
import SiteSidebar from '../components/SiteSidebar'
import Main from '../components/Main'
import ShowHeader from '../components/ShowHeader'
import EpisodePreview from '../components/EpisodePreview'

export default class ShowTemplate extends Component {
  render() {
    const {
      title: siteTitle,
      description: siteDescription,
    } = this.props.data.site.siteMetadata

    const show = this.props.data.markdownRemark
    const posts = this.props.data.allMarkdownRemark &&
      this.props.data.allMarkdownRemark.edges ?
      this.props.data.allMarkdownRemark.edges : []

    const episodes = posts.map(e => e.node)

    return (
      <Container>
        <Helmet
          title={show.frontmatter.title}
          meta={[
            {
              name: 'description',
              content: show.excerpt,
            },
          ]}
        />
        <SiteSidebar
          title={siteTitle}
          description={siteDescription}
        />
        <Main>
          <article>
            <ShowHeader {...show}/>
            <h2
              css={{
                marginTop: 0,
                paddingBottom: '1.5rem',
                marginBottom: '1.5rem',
                borderBottom: 'rgba(0, 0, 0, .05) 1px solid',
              }}
            >Episodes</h2>
            <div>
              {episodes.map(e => (
                <EpisodePreview {...e}/>
              ))}
            </div>
          </article>
        </Main>
      </Container>
    )
  }
}

export const pageQuery = graphql`
  query ShowTemplate($slug: String!, $show: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        feeds {
          title
          url
        }
        artwork {
          childImageSharp {
            responsiveResolution(width: 600) {
              src
            }
          }
        }
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: {
          layout: { eq: "episode" }
          show: { eq: $show }
          draft: { ne: true }
        }
      }
      sort: { order: DESC, fields: [frontmatter___number] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
            number
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
