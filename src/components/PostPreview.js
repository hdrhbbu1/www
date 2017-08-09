import React from 'react'
import Link from 'gatsby-link'

import { rhythm } from '../util/typography'

const PostPreview = ({ frontmatter, fields, excerpt, ...props }) => (
  <article {...props}>
    <time
      css={{
        fontFamily: 'Open Sans, sans-serif',
      }}
      dateTime={frontmatter.date}
    >
      {frontmatter.date}
    </time>
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
