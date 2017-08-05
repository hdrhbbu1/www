import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class TagList extends Component {
  render() {
    const tagged = (this.props.tags || []).map((t, i) => (
      <span
        key={t}
      >
        <Link to={`/tags/${t}/`}>
          {t}
        </Link>
        {i === this.props.tags.length - 1 ? undefined : ', '}
      </span>
    ))

    return tagged.length > 0 ? (
      <div>
        <p
          css={{
            width: '90%',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            fontFamily: 'Open Sans, sans-serif',
          }}
        >
          See other posts tagged with: {tagged}
        </p>
      </div>
    ) : <div/>
  }
}
