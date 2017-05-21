import React from 'react'
import format from 'date-fns/format'

const PostPreview = ({ frontmatter, title, excerpt }) => (
  <div className="blog-post">
    <time dateTime={format(frontmatter.date, 'MMMM D, YYYY')}>
      {format(frontmatter.date, 'MMMM YYYY')}
    </time>
    {title}
    {excerpt}
  </div>
)

export default PostPreview
