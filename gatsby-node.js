const path = require('path')
const slug = require('slug')
const slash = require('slash')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { upsertPage } = boundActionCreators
  const postTemplate = path.resolve('src/templates/Post.jsx')
  const pageTemplate = path.resolve('src/templates/Page.jsx')

  return new Promise((resolve, reject) => {
    // Query for markdown nodes to create pages.
    graphql(`
      {
        allMarkdownRemark(limit: 1000, frontmatter: {draft:{ne:true}}) {
          edges {
            node {
              slug
              frontmatter {
                title
                layout
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        console.error(result.errors)
        reject(result.errors)
      }

      result.data.allMarkdownRemark.edges.forEach(edge => {
        const { layout } = edge.node.frontmatter
        upsertPage({
          path: `${edge.node.slug}`,
          component: layout === 'post' ? postTemplate : pageTemplate,
          context: {
            slug: edge.node.slug
          }
        })
      })

      resolve()
    })
  })
}

exports.onNodeCreate = ({node, boundActionCreators, getNode}) => {
  const { updateNode } = boundActionCreators

  if (node.internal.type === 'MarkdownRemark' && typeof node.slug === 'undefined') {
    if (node.frontmatter.path) {
      node.slug = node.frontmatter.path + '/'
    } else if (node.frontmatter.title) {
      node.slug = + '/' + slug(node.frontmatter.title).toLowerCase() + '/'
    } else {
      node.slug = node.relativePath
    }
    updateNode(node)
  } else if (node.internal.type === 'File' && typeof node.slug === 'undefined') {
    const relativePath = node.relativePath
    node.slug = relativePath
    updateNode(node)
  }
}
