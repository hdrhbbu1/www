const get = require('lodash.get')

const urlFor = id => `https://api.medium.com/v1/users/${id}/posts`

const query = `
  {
    site {
      siteMetadata {
        siteUrl
      }
    }
    posts: allMarkdownRemark(
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/articles/" }
      }
    ) {
      entries: edges {
        node {
          frontmatter {
            title
            tags
            date
            draft
          }
          fields {
            slug
          }
          html
        }
      }
    }
  }
`

const serialize = ({ posts, site: { siteMetadata }}) => {
  const url = s => siteMetadata.siteUrl + s

  return posts.entries.map(p => {
    const title = get(p, 'node.frontmatter.title')
    const tags = get(p, 'node.frontmatter.tags') || []
    const content = get(p, 'node.html')
    const canonicalUrl = url(get(p, 'node.fields.slug'))
    const publishStatus = get(p, 'node.frontmatter.draft') === false ?
      'public' : 'draft'

    return {
      title,
      tags,
      content,
      canonicalUrl,
      publishStatus,
      contentFormat: 'html',
    }
  })
}

module.exports = {
  urlFor,
  defaultOptions: {
    query,
    serialize,
  },
}
