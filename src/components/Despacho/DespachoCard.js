import React from 'react'
import {entrega, imgContainer, img, link, date, footer} from "../../css/despachocard.module.css"
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink"

const DespachoCard = ({despacho}) => {
    const { slug, encabezado, caricaturaEditorial, publicado, bajada } = despacho
    return (
      <article className={entrega}>
        <div className={imgContainer}>
        <GatsbyImage
          image={caricaturaEditorial.localFile.childImageSharp.gatsbyImageData}
          className={img}
          alt="Caricatura editorial" />
          <AniLink fade className={link} to={`/despacho/${slug}`}>
            despacho completo
          </AniLink>            
          <h6 className={date}>(Publicado : {publicado})</h6>
        </div>
        <div className={footer}>
          <h4>{encabezado}</h4>
          <p>{bajada}</p>
          <AniLink fade to={`/despacho/${slug}`}>
            LEER MÁS 
          </AniLink>   
        </div>
      </article>
    );
}

export default DespachoCard
