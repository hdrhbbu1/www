const path = require('path')
const fs = require('fs-extra')
const slug = require('slug')
const slash = require('slash')
const get = require('lodash.get')
const format = require('date-fns/format')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const postTemplate = path.resolve('src/templates/Post.js')
  const pageTemplate = path.resolve('src/templates/Page.js')

  return new Promise((resolve, reject) => {
    // Query for markdown nodes to create pages.
    graphql(`
      {
        allMarkdownRemark(limit: 1000, filter: {
          frontmatter: {
            draft: { ne: true }
          }
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
        const slug = get(edge, 'node.fields.slug')
        if (!slug) {
          return
        }

        const { layout } = edge.node.frontmatter
        createPage({
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

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent)

    let nodeSlug 
    if (node.frontmatter.path) {
      nodeSlug = ensureSlashes(node.frontmatter.path)
    } else if (node.frontmatter.title) {
      nodeSlug = ensureSlashes(slug(node.frontmatter.title).toLowerCase())
    } else {
      nodeSlug = node.relativePath
    }

    if (node.frontmatter.layout === 'post') {
      nodeSlug = format(node.frontmatter.date, 'YYYY/MM') + nodeSlug
    }

    if (nodeSlug) {
      createNodeField({ node, fieldName: 'slug', fieldValue: ensureSlashes(nodeSlug) })
    }
  } else if (node.internal.type === 'File') {
    const relativePath = node.relativePath
    createNodeField({ node, fieldName: 'slug', fieldValue: relativePath })
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
