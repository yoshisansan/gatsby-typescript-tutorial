import React from "react"
// import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface SEOTypes {
  description?: string,
  lang?: string,
  meta?: any,
  title: string,
}

const SEO = ({
  description,
  lang,
  meta,
  title
}: SEOTypes) => {
  const { site } = useStaticQuery<GatsbyTypes.SEOsiteMetadataQuery>(
    graphql`
      query SEOsiteMetadata {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site?.siteMetadata?.description
  if(!lang) lang = 'ja';
  if(!meta) meta = {};

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site?.siteMetadata?.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site?.siteMetadata?.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}
export default SEO