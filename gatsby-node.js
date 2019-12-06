const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = `${node.frontmatter.projectName}-${node.frontmatter.title.split(' ').join('-')}`.toLowerCase();
    createNodeField({
      node,
      name: `slug`,
      value: `/case-studies/${encodeURIComponent(slug)}/`,
    })
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/project-template.jsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
};
