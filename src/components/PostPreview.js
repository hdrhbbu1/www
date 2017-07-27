import React from 'react'
import Link from 'gatsby-link'

const PostPreview = ({ frontmatter, fields, excerpt, ...props }) => (
  <article {...props}>
    <time dateTime={frontmatter.date}>
      {frontmatter.date}
    </time>
    <Link
      to={fields.slug}
      css={{
        textDecoration: 'none',
      }}
    >
      <h3>{frontmatter.title}</h3>
    </Link>
    <p>{excerpt}</p>
  </article>
)

export default PostPreview
