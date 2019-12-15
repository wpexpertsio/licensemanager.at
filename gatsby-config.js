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
        trackingId: "UA-114996353-2",
      }
    },
    {
      resolve: "gatsby-plugin-google-adsense",
      options: {
        googleAdClientId: "pub-3422791839846480",
        head: false
      }
    }
  ]
}
