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
                description
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

    setup: ({ query: { site: { siteMetadata }}}) => {
      return Object.assign({}, siteMetadata, {
        feed_url: siteMetadata.siteUrl + '/rss.xml',
        site_url: siteMetadata.siteUrl,
        generator: 'GatsbyJS',
      })
    },

    // Serialize the query results into feed entries
    serialize: (args) => (
      args.query.allMarkdownRemark.edges.map(edge => {
        return Object.assign({}, edge.node.frontmatter, {
          description: edge.node.excerpt,
          url: args.query.site.siteMetadata.siteUrl + edge.node.fields.slug,
          guid: args.query.site.siteMetadata.siteUrl + edge.node.fields.slug,
          custom_elements: [{ 'content:encoded': edge.node.html }],
        })
      })
    )
  }
}

exports.createPodcastFeeds = () => {
  // Specify which shows to create feeds for
  const shows = ['dispatch']

  // Map though the results and return feed config for each
  return shows.map(s => ({
    // query for the index and episode data
    query: `
      {
        site {
          siteMetadata {
            siteUrl
            mediaUrl
          }
        }
        markdownRemark(fields: { slug: { eq: "/programs/${s}/" } }) {
          html
          fields {
            slug
          }
          frontmatter {
            title
            description
            artwork {
              childImageSharp {
                responsiveResolution(width: 1400) {
                  src
                }
              }
            }
          }
        }
        allMarkdownRemark(
          limit: 1000,
          sort: { order: DESC, fields: [frontmatter___number] },
          filter: {
            frontmatter: {
              layout: { eq: "episode" },
              show: { eq: "${s}" },
              draft: { ne: true }
            }
          }
        ) {
          edges {
            node {
              html
              frontmatter {
                title
                description
                assets {
                  content_type
                  filename
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `,

    // output to /programs/${s}.xml (ex: /programs/dispatch.xml)
    output: `/programs/${s}.xml`,

    // create the feed object (requires latest plugin)
    setup: ({ query: { site, markdownRemark, allMarkdownRemark }}) => {
      const imageUrl = [
        site.siteMetadata.siteUrl,
        markdownRemark.frontmatter.artwork.childImageSharp.responsiveResolution.src
      ].join('')
      return {
        title: markdownRemark.frontmatter.title,
        description: markdownRemark.frontmatter.description,
        feed_url: `${site.siteMetadata.siteUrl}/programs/${s}.xml`,
        site_url: `${site.siteMetadata.siteUrl}${markdownRemark.fields.slug}`,
        generator: 'GatsbyJS',
        image_url: imageUrl,
      }
    },

    // serialize query results into feed items
    serialize: (args) => {
      return args.query.allMarkdownRemark.edges.map(edge => {
        const asset = edge.node.frontmatter.assets.filter(a =>
          a.content_type === 'audio/x-m4a'
        )[0]
        const { mediaUrl } = args.query.site.siteMetadata
        return Object.assign({}, edge.node.frontmatter, {
          url: args.query.site.siteMetadata.siteUrl + edge.node.fields.slug,
          description: edge.node.frontmatter.description,
          guid: args.query.site.siteMetadata.siteUrl + edge.node.fields.slug,
          custom_elements: [{ 'content:encoded': edge.node.html }],
          enclosure: {
            url: [
              mediaUrl,
              `machinefm-${s}`,
              asset.filename.replace('m4a', 'mp3'),
            ].join('/'),
          },
        })
      })
    }
  }))
}
