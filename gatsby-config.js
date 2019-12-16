/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "License Manager for WooCommerce"
  },
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography"
      }
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Raleway",
            subsets: ["latin"],
            variants: ["400", "800"]
          },
          {
            family: "Titillium Web",
            variants: ["400", "600"]
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "cms.licensemanager.at",
        protocol: "https",
        hostingWPCOM: false,
        useACF: false,
        includedRoutes: [
          "**/docs"
        ]
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-114996353-3",
        head: false
      }
    },
    {
      resolve: "gatsby-plugin-google-adsense",
      options: {
        googleAdClientId: "pub-3422791839846480",
        head: false
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: 'https://outlook.us20.list-manage.com/subscribe/post?u=2025f448cb8be50d020af9d6b&amp;id=af1b9242c6',
      },
    }
  ]
}
