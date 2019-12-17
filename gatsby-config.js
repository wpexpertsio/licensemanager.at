/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `License Manager for WooCommerce`,
    description: `Easily sell and manage your license keys through WooCommerce`,
    author: `Drazen Bebic`,
    siteUrl: `https://dev.licensemanager.at`
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            subsets: [`latin`],
            variants: [`400`, `800`]
          },
          {
            family: `Titillium Web`,
            variants: [`400`, `600`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `cms.licensemanager.at`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
        includedRoutes: [
          `**/docs`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-114996353-3`,
        head: false
      }
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        googleAdClientId: `pub-3422791839846480`,
        head: false
      }
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: 'https://outlook.us20.list-manage.com/subscribe/post?u=2025f448cb8be50d020af9d6b&amp;id=af1b9242c6',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `License Manager for WooCommerce`,
        short_name: `License Manager for WooCommerce`,
        description: `Easily sell and manage your license keys through WooCommerce`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#8F1948`,
        // Enables `Add to Homescreen` prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`
  ]
}
