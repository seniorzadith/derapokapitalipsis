const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
  query{ 
    preprojects: allGraphCmsPreproyecto {
      edges {
        node {
          slug
        }
      }
    }
    posts: allGraphCmsBlog {
      edges {
        node {
          slug
        }
      }
    }
    despachos: allGraphCmsDespacho{
      edges{
        node{
          slug
        }
      }
    }        
  }
`)

  data.preprojects.edges.forEach(({ node }) => {
    createPage({
      path: `preprojects/${node.slug}`,
      component: path.resolve("./src/templates/preproject-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  data.despachos.edges.forEach(({ node }) => {
    createPage({
      path: `despacho/${node.slug}`,
      component: path.resolve("./src/templates/despacho-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  
     
}

