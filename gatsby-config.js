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
        fontDisplay: `swap`
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
        lang: `en`,
        // Enables `Add to Homescreen` prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `/favicons/favicon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          },
          {
            src: `/favicons/favicon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`
          },
          {
            src: `/favicons/favicon-256x256.png`,
            sizes: `256x256`,
            type: `image/png`
          },
          {
            src: `/favicons/favicon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/favicons/favicon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`
          },
          {
            src: `/favicons/favicon-128x128.png`,
            sizes: `128x128`,
            type: `image/png`
          },
          {
            src: `/favicons/favicon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`
          },
          {
            src: `/favicons/favicon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`
          },
          {
            src: `/favicons/favicon-64x64.png`,
            sizes: `64x64`,
            type: `image/png`
          },
          {
            src: `/favicons/favicon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`
          },
          {
            src: `/favicons/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`
          },
          {
            src: `/favicons/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`
          },
        ],
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#8F1948`
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`
  ]
}
