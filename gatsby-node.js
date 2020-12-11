const _ = require("lodash")

const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const qualifications = require.resolve("./src/templates/qualifications.js")

  const policyPage = require.resolve("./src/templates/policy.js")

  const result = await wrapper(
    graphql(`
      {
        qualificationsData: allWpAcf(
          filter: { generate: { generate: { eq: true } } }
        ) {
          edges {
            node {
              id
              slug
              title
            }
          }
        }
        policyData: allWpPolicy {
          edges {
            node {
              slug
              title
              id
            }
          }
        }
      }
    `)
  )

  const qualificationsResult = result.data.qualificationsData.edges

  const policyResults = result.data.policyData.edges

  qualificationsResult.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}`,
      component: qualifications,
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
        title: edge.node.title,
      },
    })
  })

  policyResults.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}`,
      component: policyPage,
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
        title: edge.node.title,
      },
    })
  })
}
