import React, { Component } from 'react'
import Helmet from 'react-helmet'

import { rhythm } from '../util/typography'
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
      mediaUrl,
    } = this.props.data.site.siteMetadata

    const show = this.props.data.show
    const episode = this.props.data.markdownRemark
    const assets = episode.frontmatter.assets.map(
      toMediaURL(mediaUrl, show.frontmatter)
    )

    const { date, rawDate } = episode.frontmatter

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
            <header>
              <ShowHeader {...show} episode={true}/>
              <h1
                css={{
                  marginTop: 0,
                }}
              >{episode.frontmatter.title}</h1>
              <div
                css={{
                  fontSize: '.8rem',
                  fontFamily: 'Open Sans, sans-serif',
                  textTransform: 'uppercase',
                  paddingBottom: rhythm(1 / 2),
                  marginBottom: rhythm(1 / 2),
                  borderBottom: 'rgba(0, 0, 0, .05) 1px solid',
                }}
              >
                <span
                  css={{
                    display: 'block',
                  }}
                >Broadcast Date: <time dateTime={rawDate}>{date}</time>
                </span>
              </div>
            </header>
            <EmbeddedAudioPlayer
              title={episode.frontmatter.title}
              src={assets}
            />
            <div
              css={{
                marginTop: rhythm(1),
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
        date(formatString: "MMMM, DD YYYY")
        rawDate: date
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
            responsiveResolution(width: 600) {
              src
            }
          }
        }
      }
    }
  }
`
