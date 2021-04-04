import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import BlogList from "../components/Blog/BlogList"
import Seo from "../components/SEO"

const blog = ({ data }) => {
  return (
    <Layout>
      <Seo title="Blog" />
      <StyledHero img={data.defaultChasqui.childImageSharp.fluid} />
      <BlogList/>
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultChasqui: file(relativePath: { eq: "banner/shiva_01.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog
