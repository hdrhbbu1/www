import React, { Component } from 'react'

import FeedList from './FeedList'

export default class ShowHeader extends Component {
  render() {
    const {
      episode = false,
      frontmatter: { title, artwork, feeds, description },
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
            >{title}</h2>
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
        <img
          src={art}
          css={{
            marginLeft: 'auto',
            marginBottom: 'auto',
            width: '100%',
            maxWidth: '200px',
            '@media(max-width: 600px)': {
              marginLeft: 0,
              marginRight: 'auto',
              marginBottom: '2rem',
            },
          }}
        />
      </div>
    )
  }
}
