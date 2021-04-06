import React from "react"
import PreprojectList from "./PreprojectList"
import { useStaticQuery, graphql } from "gatsby"

const getPreprojects = graphql`{
  preprojects: allGraphCmsPreproyecto {
    edges {
      node {
        id
        tituloPreproyecto
        slug
        remoteId
        publicado
        preproyectoDestacado
        sinopsis
        imagenBannerPreproyecto {
          url
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
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