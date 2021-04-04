import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
        image
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {
    const { site } = useStaticQuery(getData) 
    
    const {
        siteDesc,
        siteTitle,        
        image,        
      } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="descripcion" content={description || siteDesc} />
      <meta name="imagen" content={image} />
    </Helmet>
  )
}

export default SEO
