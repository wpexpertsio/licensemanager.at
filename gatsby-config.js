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
  plugins: [
    `gatsby-plugin-force-trailing-slashes`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-remark-images`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".md", ".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              quality: 70
            }
          },
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'carbon',
              theme: 'synthwave'
            }
          }
        ]
      }
    },
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
          `inter\:400,600,700`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/mdx`,
        name: `mdxPages`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `mdxImages`
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          //"G-782XC0XZY3", // DEV
          "G-M2BTLYH03N", // PROD
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          //optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: [],
        },
      },
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
        theme_color: `#DF2E7F`
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
    },
    {
      resolve: `gatsby-source-gravatar`,
      options: {
        emails: [
          { email: `drazen@licensemanager.at`, query: `?size=128` },
        ],
        // No query string is passed to gravatar by default.
        // But you can add your gravatar query parameters here.
        // See https://en.gravatar.com/site/implement/images/
        // If this is set, it will be the default for `emails` (see above) with no `query` options.
        query: `?size=128&m=dp`,
      }
    }
  ]
}
