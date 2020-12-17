import path from 'path'
import { createFilePath } from "gatsby-source-filesystem"
import { GatsbyNode } from 'gatsby'

export const onCreateNode: GatsbyNode["onCreateNode"] = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql<{ allMarkdownRemark: GatsbyTypes.Query["allMarkdownRemark"]}>(`
  {
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
  `)
  const { data } = result || 'undefined';
  if( data === undefined) {
    throw 'データがありません';
  }
  data.allMarkdownRemark.edges.forEach(({node}) => {
    if(node.fields){
    createPage({
      path: node.fields.slug || 'undefined',
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        slug: node.fields.slug
      }
    })
  }
  })
}