exports.createArticlesFeed = () => {
  return {
    // Retrieve articles and site metadata
    query: `
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] },
          filter: {
            frontmatter: { draft: { ne: true } },
            fileAbsolutePath: { regex: "/articles/" }
          },
        ) {
          edges {
            node {
              excerpt
              html
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `,

    // Render to ./public/rss.xml
    output: '/rss.xml',

    serialize: (args) => (
      args.allMarkdownRemark.edges.map(edge => {
        return Object.assign({}, edge.node.frontmatter, {
          description: edge.node.excerpt,
          url: args.site.siteMetadata.siteUrl + edge.node.fields.slug,
          guid: args.site.siteMetadata.siteUrl + edge.node.fields.slug,
          custom_elements: [{ 'content:encoded': edge.node.html }],
        })
      })
    )
  }
}

exports.createPodcastFeeds = () => {
  const shows = ['dispatch']
  return shows.map(s => ({
    query: `
      {
        markdownRemark(fields: { slug: { eq: "/programs/${s}/" } }) {
          html
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
        allMarkdownRemark(
          limit: 1000,
          sort: { order: DESC, fields: [frontmatter___number] },
          filter: {
            frontmatter: {
              layout: { eq: "episode" },
              show: { eq: "${s}" }
            }
          }
        ) {
          edges {
            node {
              html
            }
          }
        }
      }
    `,
    output: `/programs/${s}.xml`,
    setup: (args) => {
    },
    serialize: (args) => (
      args.allMarkdownRemark.map(edge => {
        return Object.assign({}, edge.node.frontmatter, {
          url: args.site.siteMetadata.siteUrl + edge.node.fields.slug,
          guid: args.site.siteMetadata.siteUrl + edge.node.fields.slug,
          custom_elements: [{ 'content:encoded': edge.node.html }],
        })
      })
    )
  }))
}
