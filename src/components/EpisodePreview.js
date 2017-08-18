import React, { Component } from 'react'
import Link from 'gatsby-link'

import { rhythm } from '../util/typography'

export default class EpisodePreview extends Component {
  render() {
    const {
      frontmatter: {
        title,
        number,
        rawDate,
        date,
      },
      fields: { slug },
      excerpt,
    } = this.props

    return (
      <div>
        <Link
          to={slug}
        >
          <h3>#{number}: {title}</h3>
        </Link>
        <span
          css={{
            display: 'block',
            fontSize: '.8rem',
            fontFamily: 'Open Sans, sans-serif',
            textTransform: 'uppercase',
            paddingBottom: rhythm(1 / 2),
            marginBottom: rhythm(1 / 2),
            borderBottom: 'rgba(0, 0, 0, .05) 1px solid',
          }}
        >Broadcast Date: <time dateTime={rawDate}>{date}</time>
        </span>
        <p
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </div>
    )
  }
}
