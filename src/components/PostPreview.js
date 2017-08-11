import React from 'react'
import Link from 'gatsby-link'

import { rhythm } from '../util/typography'

const PostPreview = ({ frontmatter, timeToRead, fields, excerpt, ...props }) => (
  <article {...props}>
    <div
      css={{
        fontFamily: 'Open Sans, sans-serif',
      }}
    >
      <time dateTime={frontmatter.date}>
        {frontmatter.date}
      </time>
      {timeToRead ? (
        <span
          css={{
            marginLeft: '.5rem',
            fontSize: '.9em',
            lineHeight: '1em',
            display: 'inline-block',
            paddingLeft: '.5rem',
            borderLeft: 'rgba(0, 0, 0, .05) solid',
          }}
        >{timeToRead} min. read</span>
      ) : undefined}
    </div>
    <Link
      to={fields.slug}
      css={{
        textDecoration: 'none',
      }}
    >
      <h3
        css={{
          marginTop: rhythm(.25),
        }}
      >{frontmatter.title}</h3>
    </Link>
    <p>{excerpt}</p>
  </article>
)

export default PostPreview
