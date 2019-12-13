const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query content for WordPress Docs
  const result = await graphql(`
    query {
      allWordpressWpDocs(filter: {status: {eq: "publish"}}) {
        edges {
          node {
            id
            path
          }
        }
      }
    }
  `)

  const docTemplate = path.resolve(`./src/components/doc/doc.js`)

  result.data.allWordpressWpDocs.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: edge.node.path,
      // specify the component template of your choice
      component: slash(docTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  })
}