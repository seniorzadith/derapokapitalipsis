import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"
//import Seo from "../components/SEO"


export default function contact({ data }) {
  return (
    <Layout>
      
      <StyledHero img={data.defaultContact.childImageSharp.fluid} />
      <Contact />
    </Layout>
  );
}

export const query = graphql`{
  defaultContact: file(relativePath: {eq: "banner/defaultContact.png"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
    }
  }
}
`
