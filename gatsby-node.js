const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query content for WordPress Docs
  const docs = await graphql(`
    query {
      allWordpressWpDocs(filter: {status: {eq: "publish"}}) {
        edges {
          node {
            id
            wordpress_id
            wordpress_parent
            path
          }
        }
      }
    }
  `);

  const posts = await graphql(`
    query {
      allWordpressPost(filter: {status: {eq: "publish"}}) {
        edges {
          node {
            id
            path
          }
        }
      }
    }
  `);

  const docTemplate  = path.resolve(`./src/templates/doc/doc.js`);
  const postTemplate = path.resolve(`./src/templates/post/post.js`);

  docs.data.allWordpressWpDocs.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: edge.node.path,
      // specify the component template of your choice
      component: slash(docTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
        wordpress_id: edge.node.wordpress_id,
        wordpress_parent: edge.node.wordpress_parent
      },
    })
  });

  posts.data.allWordpressPost.edges.forEach(edge => {
    console.log('blog' + edge.node.path);

    createPage({
      path: 'blog' + edge.node.path,
      component: slash(postTemplate),
      context: {
        id: edge.node.id
      }
    })
  });
}