import React from "react"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import Curri from "../components/Home/Curriculum"
import Layout from "../components/Layout"

const resumen = ({data}) => {  
  return (
    <Layout> 
      <StyledHero img={data.defaultCurri.childImageSharp.fluid} />      
      <Curri/>                  
    </Layout>
  ); 
}

export const query = graphql`{
  defaultCurri: file(relativePath: {eq: "banner/defaultCurri.jpg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
    }
  }
}
`
export default resumen