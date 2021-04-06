import React from "react"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import Lapeste from "../components/Peste/Lapeste"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Alternativas from "../components/Peste/Alternativas"
import AniLink from "gatsby-plugin-transition-link/AniLink";


const peste = ({data}) => { 
 
  return (
    <Layout>      
      <Seo title="la peste de albert camus rediviva" />
      <StyledHero img={data.defaultPeste.childImageSharp.gatsbyImageData} />      
      <Lapeste/>      
      <Alternativas/>
      <AniLink fade to="/peste/" className="btn-primary centrado">
          La peste
      </AniLink>              
    </Layout>
  ); 
}

export const query = graphql`{
  defaultPeste: file(relativePath: {eq: "intros/lapeste.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: FULL_WIDTH)
    }
  }
}
`
export default peste