import React from "react"
import PreprojectList from "./PreprojectList"
import { useStaticQuery, graphql } from "gatsby"

const getPreprojects = graphql`
 query {
    preprojects: allGraphCmsPreproyecto{
      edges{
        node{          
          id
          tituloPreproyecto
          slug           
          remoteId
          publicado
          preproyectoDestacado
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

const Preprojects = () => {
  const { preprojects } = useStaticQuery(getPreprojects)

  return <PreprojectList preprojects={preprojects} />
}

export default Preprojects