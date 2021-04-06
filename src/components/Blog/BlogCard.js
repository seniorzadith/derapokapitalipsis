import React from "react"
import {quipu, imgContainer, img, link, footer} from "../../css/blogcard.module.css"
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogCard = ({ blog }) => {
  const { slug, titulo, imagenPortadaBlog, resumen } = blog
  return (
    <article className={quipu}>
      <div className={imgContainer}>
        <GatsbyImage
          image={imagenPortadaBlog.localFile.childImageSharp.gatsbyImageData}
          className={img}
          alt="Quipu" />
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
  );
}

export default BlogCard