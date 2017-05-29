const path = require('path')
const fs = require('fs-extra')
const slug = require('slug')
const slash = require('slash')
const Feed = require('feed')

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

/*
exports.postBuild = ({ graphql }) => {
  return new Promise((resolve, reject) => {
    graphql(`
      {
        site {
          siteMetadata {
            title
            description
            author
            email
            url
          }
        }
        allMarkdownRemark(limit: 1000, frontmatter: {
          draft: { ne: true }
        }) {
          edges {
            node {
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
              excerpt
              html
            }
          }
        }
      }
    `).then(({ errors, data }) => {
      if (errors) {
        console.error(errors)
        reject(errors)
      }

      const feed = new Feed({
        title: data.site.siteMetadata.title,
        description: data.site.siteMetadata.description,
        id: data.site.siteMetadata.url,
        link: data.site.siteMetadata.url,
        author: {
          name: data.site.siteMetadata.author,
          email: data.site.siteMetadata.email,
          link: data.site.siteMetadata.url
        }
      })

      data.allMarkdownRemark.edges.forEach(edge => {
        const url = data.site.siteMetadata.url + edge.node.slug
        feed.addItem({
          title: edge.node.frontmatter.title,
          id: url,
          link: url,
          description: edge.node.excerpt,
          date: edge.node.frontmatter.date
        })
      })

      Promise.all([
        fs.outputFile(path.join(__dirname, 'public/rss.xml'), feed.rss2()),
        fs.outputFile(path.join(__dirname, 'public/atom.xml'), feed.atom1())
      ]).then(() => {
        resolve()
      }).catch(reject)
    })
  })
}
*/

function ensureSlashes(slug) {
  if (slug.charAt(0) !== '/') {
    slug = '/' + slug
  }

  if (slug.charAt(slug.length -1) !== '/') {
    slug = slug + '/'
  }

  return slug
}
