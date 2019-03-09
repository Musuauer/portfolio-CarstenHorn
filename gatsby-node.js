const path = require('path')

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve('src/templates/project.js')
    resolve(
      graphql(`
                {
                    allContentfulProject {
                        edges {
                            node {
                                slug
                                path
                            }
                        }
                    }
                    allContentfulBook {
                      edges {
                          node {
                              slug
                              path
                          }
                      }
                  }

                }
            `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulProject.edges.forEach((edge) => {
          createPage({
            path: edge.node.path,
            component: projectTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        result.data.allContentfulBook.edges.forEach((edge) => {
          createPage({
            path: edge.node.path,
            component: projectTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
      })
    )
  })
}
