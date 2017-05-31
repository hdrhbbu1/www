const path = require('path')
const fs = require('fs-extra')
const slug = require('slug')
const slash = require('slash')
const RSS = require('rss')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { upsertPage } = boundActionCreators
  const postTemplate = path.resolve('src/templates/Post.js')
  const pageTemplate = path.resolve('src/templates/Page.js')

  return new Promise((resolve, reject) => {
    // Query for markdown nodes to create pages.
    graphql(`
      {
        allMarkdownRemark(limit: 1000, frontmatter: {
          draft: { ne: true }
        }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                layout
              }
            }
          }
        }
      }
    `).then(({ errors, data }) => {
      if (errors) {
        console.error(errors)
        return reject(errors)
      }

      data.allMarkdownRemark.edges.forEach(edge => {
        const { layout } = edge.node.frontmatter
        upsertPage({
          path: edge.node.fields.slug,
          component: layout === 'post' ? postTemplate : pageTemplate,
          context: {
            slug: edge.node.fields.slug
          }
        })
      })

      resolve()
    })
  })
}

exports.onNodeCreate = ({node, boundActionCreators, getNode}) => {
  const { addFieldToNode } = boundActionCreators

  if (node.internal.type === 'MarkdownRemark' && typeof node.slug === 'undefined') {
    let nodeSlug 
    if (node.frontmatter.path) {
      nodeSlug = ensureSlashes(node.frontmatter.path)
    } else if (node.frontmatter.title) {
      nodeSlug = ensureSlashes(slug(node.frontmatter.title).toLowerCase())
    } else {
      nodeSlug = node.relativePath
    }
    if (nodeSlug) {
      addFieldToNode({ node, fieldName: 'slug', fieldValue: nodeSlug })
    }
  } else if (node.internal.type === 'File' && typeof node.slug === 'undefined') {
    const relativePath = node.relativePath
    addFieldToNode({ node, fieldName: 'slug', fieldValue: relativePath })
  }
}

function ensureSlashes(slug) {
  if (slug.charAt(0) !== '/') {
    slug = '/' + slug
  }

  if (slug.charAt(slug.length -1) !== '/') {
    slug = slug + '/'
  }

  return slug
}
