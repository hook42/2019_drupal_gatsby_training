module.exports = {
  siteMetadata: {
    title: `BADCamp Gatsby Training`,
    slogan: 'We are here in Berkeley learning Gatsby!',
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@cboyden`,
  },
  plugins: [
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        //baseUrl: `https://stm5d95917bef2e4-l6po7xb9wogqpizeor0rmtsio9o6wfcc.tugboat.qa/`, // optional: use your simplytest url here
        baseUrl: `https://stm5d96122343cbc-gbynvm7eubpgcopzn8x5n5mppkn4h0bm.tugboat.qa/`,
        apiBase: `jsonapi`, // optional, defaults to `jsonapi`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
