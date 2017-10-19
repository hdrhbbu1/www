import React, { Component } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import GLink from 'gatsby-link'

import Player from '../components/Player/Video'
import { rhythm } from '../util/typography'

const FullscreenWrapper = styled.div`
  margin-bottom: ${rhythm(2)}
`

const Headline = styled.h1`
  text-align: center;
  font-size: 3em;
  @media(max-width: 800px) {
    font-size: 2em;
  }
`

const Link = styled(GLink)`
  text-decoration: none;
`

const Content = styled.div`
  text-align: center;
  margin: ${rhythm(1)} auto 0 auto;
  max-width 600px;
  @media(max-width: 600px) {
    width: 90%;
  }
`

export default class FilmTemplate extends Component {
  render() {
    const { cUrl } = this.props.data.site.siteMetadata
    const {
      frontmatter: {
        title,
        mpd,
      },
      fields: { slug },
      excerpt,
      html,
    } = this.props.data.markdownRemark
    return (
      <FullscreenWrapper>
        <Helmet
          title={title}
          description={excerpt}
        />
        <Headline>
          <Link to={slug}>{title}</Link>
        </Headline>
        <Player host={cUrl} mpd={mpd}/>
        <Content dangerouslySetInnerHTML={{ __html: html }}/>
      </FullscreenWrapper>
    )
  }
}

export const pageQuery = graphql`
  query TemplateFilm($slug: String!) {
    site {
      siteMetadata {
        cUrl
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
        mpd
      }
    }
  }
`
