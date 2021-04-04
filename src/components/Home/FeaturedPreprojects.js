import React from "react"
import Preproject from "../Preprojects/Preproject"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import {items, center} from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getPreprojects = graphql`
 query {
    preprojects: allGraphCmsPreproyecto(filter:{preproyectoDestacado: {eq:true}}){
      edges{
        node{          
          id
          tituloPreproyecto
          publicado
          slug         
          remoteId
          sinopsis
          imagenBannerPreproyecto{            
            url
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            } 
          }          
        }
      }
    }   
  }

`

const FeaturedPreprojects = () => {
  const response = useStaticQuery(getPreprojects)
  const preprojects = response.preprojects.edges


  return (
    <>
    <section className={items}>
      <Title title="proyectos" subtitle="andando" />
      <div className={center}>
      {preprojects.map(({ node }) => {
        return <Preproject key={node.id} preproject={node} />
      })}
      </div>  
    </section>
     <div className="centrado">
     <AniLink fade to="/preprojects" className="btn-primary">
     otros proyectos
   </AniLink>
   </div>
   </>
  )
}

export default FeaturedPreprojects
