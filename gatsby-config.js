const {
  createArticlesFeed,
  createPodcastFeeds
} = require('./config/feeds')

module.exports = {
  siteMetadata: {
    title: 'Nicholas Young',
    author: 'Nicholas Young',
    byline: 'Author, father, technologist',
    description: 'Perspectives on family, disability, technology, and media.',
    postscript: 'Nicholas Young is a husband, father, technologist, and disability advocate from Denver, Colorado.',
    email: 'nicholas@nicholaswyoung.com',
    siteUrl: 'https://nicholaswyoung.com',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/programs`,
        name: 'programs',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-glamor',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-33160485-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Nicholas Young',
        short_name: 'Nicholas Young',
        icons: [
          {
            src: '/profile.jpg',
            sizes: '1024x1024',
            type: 'image/png',
          },
        ],
        start_url: '/',
        background_color: 'white',
        theme_color: 'white',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        feeds: [].concat(
          createArticlesFeed(),
          createPodcastFeeds()
        )
      }
    },
    `gatsby-plugin-sitemap`,
  ]
}
