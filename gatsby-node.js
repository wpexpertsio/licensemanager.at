const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const docs = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id,
            slug
          }
        }
      }
    }
  `);

  const docsTemplate = path.resolve(`./src/templates/doc/doc.js`);
  const blogTemplate = path.resolve(`./src/templates/blog/blog.js`);

  docs.data.allMdx.edges.forEach(({ node }, index) => {
    let template;

    if (node.slug.substr(0, 4) === 'docs') {
      template = docsTemplate;
    } else {
      template = blogTemplate;
    }

    createPage({
      path: node.slug,
      component: slash(template),
      context: {
        id: node.id
      }
    });
  });
}
