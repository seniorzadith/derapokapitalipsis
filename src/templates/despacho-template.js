import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import {despacho, center, image, parrafito, next, nextup} from "../css/singledespacho.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import StyledHero from "../components/StyledHero"
import Image from "gatsby-image"
//import { GatsbyImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Despacho = ({data}) => {
    const {
        encabezado, 
        publicado,         
        caricaturaEditorial,
        bannerDespacho,
        diatriba,
        siguiente
    } = data.despacho
    
    return (
        <Layout>
      <StyledHero img={bannerDespacho.localFile.childImageSharp.fluid} />
      <section className={despacho}>
        <div className={center}>
          <h1 className="titulo">{encabezado}</h1>          
          <h5>(publicado : {publicado})</h5>         
          <div>
            <Image  fluid={caricaturaEditorial.localFile.childImageSharp.fluid} alt="Caricatura editorial" className={image}/>
          </div >
          <div className={parrafito}>
          <MDXRenderer>
             {diatriba.markdownNode.childMdx.body}
          </MDXRenderer>
          </div>
          <p className={nextup}>Comin'soon!</p>
          <p className={next}> {siguiente}</p>
          <AniLink fade to="/despacho" className="btn-primary">
            más quipus
          </AniLink>
        </div>
      </section>
    </Layout>
    )
}


export const query = graphql`
query getDespacho($slug: String!) {
  despacho: graphCmsDespacho(slug: { eq: $slug }) {
    id
    remoteId  
    encabezado
    publicado
    bajada
    bannerDespacho{
      localFile{
        childImageSharp{
          fluid{
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    siguiente
    caricaturaEditorial{
      localFile{
        childImageSharp{
          fluid{
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    diatriba{
      markdownNode{
        childMdx{
          body
        }
      }
    }
    
  }
}
`

export default Despacho

