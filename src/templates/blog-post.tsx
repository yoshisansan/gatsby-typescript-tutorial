import React, {FC} from "react"
import { graphql, PageProps } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost: FC<PageProps<GatsbyTypes.blogPostRemarkQuery>> = ({data}) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post?.frontmatter?.title || "undefined"} description={post?.excerpt || "undefined"} />
      <div>
        <h1>{post?.frontmatter?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post?.html || "undefined"}}/>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query blogPostRemark($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`

export default BlogPost
