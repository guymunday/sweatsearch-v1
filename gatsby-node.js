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

  const page = require.resolve("./src/templates/page.js")
  const policyPage = require.resolve("./src/templates/policy.js")

  const result = await wrapper(
    graphql(`
      {
        policyData: allWpPolicy {
          edges {
            node {
              slug
              title
              id
            }
          }
        }
        page: allWpContentPage {
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

  const pageResults = result.data.page.edges
  const policyResults = result.data.policyData.edges

  pageResults.forEach(edge => {
    createPage({
      path: edge.node.slug === "home" ? "/" : `/${edge.node.slug}`,
      component: page,
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
