const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
  query nodeQuery {
    amplify {
      listContentItems {
        items {
          id
          url_slug
        }
      }
    }
  }
  `)
  data.amplify.listContentItems.items.forEach(({ id, url_slug }) => {
      actions.createPage({
      path: `items/${url_slug}`,
      component: path.resolve(`./src/templates/item.js`),
      context: {
          id: id,
          url_slug: url_slug
      },
      })
  })
}

