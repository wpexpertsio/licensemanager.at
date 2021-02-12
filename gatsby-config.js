/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `License Manager for WooCommerce`,
    description: `The License Manager for WooCommerce WordPress Plugin allows you to easily sell and manage your license keys through WooCommerce.`,
    author: `Drazen Bebic`,
    siteUrl: `https://www.licensemanager.at`
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `inter\:400,700`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `cms.licensemanager.at`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
        includedRoutes: [
          `**/docs`,
          `**/posts`,
          `**/media`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-114996353-2`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `License Manager for WooCommerce`,
        short_name: `License Manager for WooCommerce`,
        description: `The License Manager for WooCommerce WordPress Plugin allows you to easily sell and manage your license keys through WooCommerce.`,
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
    {
      resolve: `gatsby-plugin-htaccess`,
      options: {
        host: 'www.licensemanager.at',
        https: true,
        www: true,
        ErrorDocument: `
          ErrorDocument 401 /404.html
          ErrorDocument 404 /404.html
          ErrorDocument 500 /404.html
        `,
        custom: `
          <IfModule mod_expires.c>
            ExpiresActive On
          
            # Images
            ExpiresByType image/jpeg "access plus 1 year"
            ExpiresByType image/gif "access plus 1 year"
            ExpiresByType image/png "access plus 1 year"
            ExpiresByType image/webp "access plus 1 year"
            ExpiresByType image/svg+xml "access plus 1 year"
            ExpiresByType image/x-icon "access plus 1 year"
          
            # Video
            ExpiresByType video/mp4 "access plus 1 year"
            ExpiresByType video/mpeg "access plus 1 year"
          
            # CSS, JavaScript
            ExpiresByType text/css "access plus 1 month"
            ExpiresByType text/javascript "access plus 1 month"
            ExpiresByType application/javascript "access plus 1 month"
          
            # Others
            ExpiresByType application/pdf "access plus 1 month"
            ExpiresByType application/x-shockwave-flash "access plus 1 month"
          </IfModule>
        `
      }
    }
  ]
}
