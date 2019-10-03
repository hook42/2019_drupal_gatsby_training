/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const path = require(`path`)
const transliteration = require('transliteration')

// Create a slug for each recipe and set it as a field on the node.
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `node__recipe`) {
    const slugFragment = transliteration.slugify(node.title)
    const slug = `/recipe/${slugFragment}/`
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const recipeTemplate = path.resolve(`src/templates/recipe-page.js`)
    // Query for recipe nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            allNodeRecipe {
              edges {
                node {
                  title
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages for each recipe.
        result.data.allNodeRecipe.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: recipeTemplate,
            context: {
              slug: node.fields.slug,
            },
          })
        })
      })
    )
  })
}
