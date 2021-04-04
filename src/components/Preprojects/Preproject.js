import React from "react"
import {proproject, imgContainer, img, link, footer, info, aire} from "../../css/preproject.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "gatsby-image"
import PropTypes from "prop-types"

const Preproject = ({ preproject }) => {
  const { tituloPreproyecto, slug, sinopsis, imagenBannerPreproyecto} = preproject

  return (
    <article className={proproject}>
      <div className={imgContainer}>
        <Image fluid={imagenBannerPreproyecto.localFile.childImageSharp.fluid} className={img} alt="Proyecto" />
        <AniLink fade className={link} to={`/preprojects/${slug}`} >
          detalles
        </AniLink>
      </div>
      <div className={footer}>        
        <div className={info}>
           <h3 className={aire}>{tituloPreproyecto}</h3>
           <p> {sinopsis}</p>
        </div>
        
      </div>
    </article>
  )
}

Preproject.propTypes = {
  preproject: PropTypes.shape({
    tituloPreproyecto: PropTypes.string.isRequired,
    sinopsis: PropTypes.string.isRequired,    
    imagenBannerPreproyecto: PropTypes.object.isRequired
  }),
}


export default Preproject