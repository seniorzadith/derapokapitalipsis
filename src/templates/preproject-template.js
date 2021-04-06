import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import {template, center, images, image, parrafo  }from "../css/template.module.css"
import { GatsbyImage } from "gatsby-plugin-image";
//import { GatsbyImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Template = ({ data }) => {  
  const {    
    tituloPreproyecto,
    sinopsis,
    publicado,
    imagenBannerPreproyecto,
    imagenFundamentosPreproyecto,    
    imagenConcrecionPreproyecto,
    imagenResultadosPreproyecto,
    fundamentos,
    concrecion,
    resultados
  } = data.preproject

  return (
    <Layout>
      <StyledHero img={imagenBannerPreproyecto.localFile.childImageSharp.gatsbyImageData} />
      <section className={template}>       
        <div className={center}>
          <h2>{tituloPreproyecto}</h2>
          <p>{sinopsis}</p>
          <p>Publicado:{publicado}</p>
          <div className={images}>
          <GatsbyImage
            image={imagenFundamentosPreproyecto.localFile.childImageSharp.gatsbyImageData}
            alt="Fundamentos"
            className={image} />
          </div>
          <div>
          <MDXRenderer>
              {fundamentos.markdownNode.childMdx.body}
          </MDXRenderer>
          </div>   
          <div className={images}>
          <GatsbyImage
            image={imagenConcrecionPreproyecto.localFile.childImageSharp.gatsbyImageData}
            alt="Concreción"
            className={image} />
          </div>
          <div>
          <MDXRenderer>
              {concrecion.markdownNode.childMdx.body}
          </MDXRenderer>
          </div>  
          <div>
          <GatsbyImage
            image={imagenResultadosPreproyecto.localFile.childImageSharp.gatsbyImageData}
            alt="Resultados"
            className={image} />
          </div>
          <div className={parrafo}> 
          <MDXRenderer>
              {resultados.markdownNode.childMdx.body}
          </MDXRenderer>
          </div>  
        </div>    
      </section>    
    </Layout>
  );  
}


export const query = graphql`query ($slug: String!) {
  preproject: graphCmsPreproyecto(slug: {eq: $slug}) {
    tituloPreproyecto
    publicado
    imagenBannerPreproyecto {
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        }
      }
    }
    imagenFundamentosPreproyecto {
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        }
      }
    }
    imagenConcrecionPreproyecto {
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        }
      }
    }
    imagenResultadosPreproyecto {
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        }
      }
    }
    sinopsis
    fundamentos {
      markdownNode {
        childMdx {
          body
        }
      }
    }
    concrecion {
      markdownNode {
        childMdx {
          body
        }
      }
    }
    resultados {
      markdownNode {
        childMdx {
          body
        }
      }
    }
  }
}
`

export default Template

