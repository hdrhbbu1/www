const {
  createArticlesFeed,
  createPodcastFeeds,
} = require('./config/feeds')

module.exports = {
  siteMetadata: {
    title: 'Nicholas Young',
    author: 'Nicholas Young',
    byline: 'Father, technologist, writer',
    description: 'Perspectives on family, disability, technology, and media.',
    postscript: 'Nicholas Young is a husband, father, technologist, and disability advocate from Denver, Colorado.',
    email: 'nicholas@nicholaswyoung.com',
    siteUrl: 'https://www.nicholaswyoung.com',
    mediaUrl: 'https://archive.org/download',
    cUrl: 'https://storage.googleapis.com/c.nicholaswyoung.com',
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/films`,
        name: 'films',
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
              maxWidth: 1024,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-glamor',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
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
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'tomato',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-106620318-1',
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        feeds: [].concat(
          createArticlesFeed(),
          createPodcastFeeds()
        ),
      },
    },
    {
      resolve: 'gatsby-syndicate-medium',
      options: {
        id: '1d116442d3a58bf593ac389d692e6d27f8298874b80d48f4d2a7be7ec489586c4',
        token: process.env.MEDIUM_TOKEN,
      },
    },
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-netlify',
  ],
}
