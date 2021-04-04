import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import {template, center, images, image, parrafo  }from "../css/template.module.css"
import Image from "gatsby-image"
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
      <StyledHero img={imagenBannerPreproyecto.localFile.childImageSharp.fluid} />
      <section className={template}>       
        <div className={center}>
          <h2>{tituloPreproyecto}</h2>
          <p>{sinopsis}</p>
          <p>Publicado:{publicado}</p>
          <div className={images}>
          <Image  fluid={imagenFundamentosPreproyecto.localFile.childImageSharp.fluid} alt="Fundamentos" className={image}/>
          </div>
          <div>
          <MDXRenderer>
              {fundamentos.markdownNode.childMdx.body}
          </MDXRenderer>
          </div>   
          <div className={images}>
          <Image  fluid={imagenConcrecionPreproyecto.localFile.childImageSharp.fluid} alt="Concreción" className={image}/>
          </div>
          <div>
          <MDXRenderer>
              {concrecion.markdownNode.childMdx.body}
          </MDXRenderer>
          </div>  
          <div>
          <Image  fluid={imagenResultadosPreproyecto.localFile.childImageSharp.fluid} alt="Resultados" className={image}/>
          </div>
          <div className={parrafo}> 
          <MDXRenderer>
              {resultados.markdownNode.childMdx.body}
          </MDXRenderer>
          </div>  
        </div>    
      </section>    
    </Layout>
  )  
}


export const query = graphql`
query($slug:String!){
  preproject: graphCmsPreproyecto(slug:{eq:$slug}){
    tituloPreproyecto
    publicado   
    imagenBannerPreproyecto{
      localFile{
        childImageSharp{
          fluid{
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }    
    imagenFundamentosPreproyecto{
      localFile{
        childImageSharp{
          fluid{
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    imagenConcrecionPreproyecto{
     localFile{
        childImageSharp{
          fluid{
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }    
    imagenResultadosPreproyecto{
      localFile{
        childImageSharp{
          fluid{
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    sinopsis
    fundamentos{
      markdownNode{
        childMdx{
          body
        }
      }
    }
    concrecion{
      markdownNode{
        childMdx{
          body
        }
      }
    }
    resultados{
      markdownNode{
        childMdx{
          body
        }
      }
    }
  }
}
`

export default Template

