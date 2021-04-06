import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"
//import Seo from "../components/SEO"


export default function contact({ data }) {
  return (
    <Layout>
      
      <StyledHero img={data.defaultContact.childImageSharp.gatsbyImageData} />
      <Contact />
    </Layout>
  );
}

export const query = graphql`{
  defaultContact: file(relativePath: {eq: "banner/defaultContact.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: FULL_WIDTH)
    }
  }
}
`
