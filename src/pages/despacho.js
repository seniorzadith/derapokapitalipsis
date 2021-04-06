import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import DespachoList from "../components/Despacho/DespachoList"
import Seo from "../components/SEO"

const despacho = ({ data }) => {
  return (
    <Layout>
      <Seo title="Despacho" />
      <StyledHero img={data.defaultDespacho.childImageSharp.gatsbyImageData} />
      <DespachoList/>
    </Layout>
  );
}

export const query = graphql`{
  defaultDespacho: file(relativePath: {eq: "banner/defaultDespacho.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: FULL_WIDTH)
    }
  }
}
`

export default despacho