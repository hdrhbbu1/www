import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class EpisodePreview extends Component {
  render() {
    const {
      frontmatter: {
        title,
        number,
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
        <p
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </div>
    )
  }
}
