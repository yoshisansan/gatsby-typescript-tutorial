import React, {FC} from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"

const About: FC<PageProps<GatsbyTypes.AboutsiteMetadataQuery>> = ({ data }) => {
  return (
    <Layout>
      <h1>About {data.site?.siteMetadata?.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query AboutsiteMetadata {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default About
