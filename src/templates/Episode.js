import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Container from '../components/Container'
import SiteSidebar from '../components/SiteSidebar'
import Main from '../components/Main'
import ShowHeader from '../components/ShowHeader'
import EmbeddedAudioPlayer from '../components/EmbeddedAudioPlayer'

import { toMediaURL } from '../util/helpers'

export default class EpisodeTemplate extends Component {
  render() {
    const {
      title: siteTitle,
      description: siteDescription,
      mediaUrl
    } = this.props.data.site.siteMetadata

    const show = this.props.data.show
    const episode = this.props.data.markdownRemark
    const assets = episode.frontmatter.assets.map(
      toMediaURL(mediaUrl, show.frontmatter)
    )

    return (
      <Container>
        <Helmet
          title={episode.frontmatter.title}
          meta={[
            {
              name: 'description',
              content: episode.excerpt,
            },
          ]}
        />
        <SiteSidebar
          title={siteTitle}
          description={siteDescription}
        />
        <Main>
          <article>
            <ShowHeader {...show} episode={true}/>
            <h1
              css={{
                marginTop: 0,
                paddingBottom: '1.5rem',
                marginBottom: '1.5rem',
                borderBottom: 'rgba(0, 0, 0, .05) 1px solid',
              }}
            >{episode.frontmatter.title}</h1>
            <EmbeddedAudioPlayer
              title={episode.frontmatter.title}
              src={assets}
            />
            <div
              css={{
                marginTop: '1.5rem',
              }}
              dangerouslySetInnerHTML={{ __html: episode.html }}
            />
          </article>
        </Main>
      </Container>
    )
  }
}

export const pageQuery = graphql`
  query EpisodeTemplate($slug: String!, $show: String!) {
    site {
      siteMetadata {
        title
        description
        mediaUrl
      }
    }
    markdownRemark(
      fields: {
        slug: { eq: $slug }
      }
      frontmatter: {
        layout: { eq: "episode" }
        show: { eq: $show }
        draft: { ne: true }
      }
    ) {
      excerpt(pruneLength: 250)
      frontmatter {
        number
        title
        date
        assets {
          format
          filename
        }
      }
      fields {
        slug
      }
      html
    }
    show: markdownRemark(
      frontmatter: {
        show: { eq: $show }
        layout: { eq: "show" }
      }
    ) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        archiveId
        feeds {
          title
          url
        }
        artwork {
          childImageSharp {
            responsiveResolution(width: 200) {
              src
            }
          }
        }
      }
    }
  }
`
