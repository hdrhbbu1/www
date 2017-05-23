import React from 'react'
import Link from 'gatsby-link'

const PostPreview = ({ frontmatter, fields, excerpt }) => (
  <div className="blog-post">
    <time dateTime={frontmatter.date}>
      {frontmatter.date}
    </time>
    <h3>
      <Link to={fields.slug}>{frontmatter.title}</Link>
    </h3>
    <p>{excerpt}</p>
  </div>
)

export default PostPreview
