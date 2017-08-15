import React, { Component } from 'react'
import Link from 'gatsby-link'

import FeedList from './FeedList'

export default class ShowHeader extends Component {
  render() {
    const {
      episode = false,
      frontmatter: { title, artwork, feeds, description },
      fields: { slug },
      html,
    } = this.props

    const art = artwork && artwork.childImageSharp ?
      artwork.childImageSharp.responsiveResolution.src : '/share.jpg'

    return (
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          '@media(max-width: 600px)': {
            flexDirection: 'column',
          },
        }}
      >
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            marginRight: '1rem',
            marginBottom: '1rem',
          }}
        >
          {episode ? (
            <h2
              css={{
                marginTop: 0,
              }}
            >
              <Link
                to={slug}
                css={{
                  textDecoration: 'none',
                }}
              >{title}</Link>
            </h2>
          ) : (
            <h1
              css={{
                marginTop: 0,
              }}
            >
              {title}
            </h1>
          )}
          <FeedList feeds={feeds}/>
          <div
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
        </div>
        <div
          css={{
            marginLeft: 'auto',
            marginTop: 'auto',
            marginBottom: 'auto',
            '@media(max-width: 600px)': {
              marginLeft: 0,
              marginRight: 'auto',
              marginBottom: '2rem',
            },
          }}
        >
          <Link to={slug}>
            <img src={art}/>
          </Link>
        </div>
      </div>
    )
  }
}
