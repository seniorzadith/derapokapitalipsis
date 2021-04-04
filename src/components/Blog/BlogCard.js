import React from "react"
import {quipu, imgContainer, img, link, footer} from "../../css/blogcard.module.css"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogCard = ({ blog }) => {
  const { slug, titulo, imagenPortadaBlog, resumen } = blog
  return (
    <article className={quipu}>
      <div className={imgContainer}>
        <Image fluid={imagenPortadaBlog.localFile.childImageSharp.fluid} className={img} alt="Quipu" />
        <AniLink fade className={link} to={`/blog/${slug}`}>          
          in extenso        
        </AniLink>        
      </div>       
      <div className={footer}>
        <h3>{titulo}</h3>
        <p>{resumen}</p>
        <AniLink fade to={`/blog/${slug}`}>          
          LEER MÁS    
        </AniLink>        
      </div>               
    </article>
  )
}

export default BlogCard