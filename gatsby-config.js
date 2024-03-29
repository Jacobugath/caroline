module.exports = {
  siteMetadata: {
    title: `Glimmer of Light Music Studio`,
    description: `Glimmer of Light Music Studio. Everyone can sing.`,
    author: `Jacob Morris`,
  },
  plugins:  [
    {resolve: `gatsby-plugin-sass`},
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'EB Garamond',
            subsets: [`latin`],
          },
          {
            family: `Dancing Script`,
            subsets: [`latin`],
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {

      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Caroline Morris Music Studio`,
        short_name: `studio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
