import React from "react"
import {footer, logo, copyright, links, credito, icons} from "../css/footer.module.css"
import vinculos from "../constants/links"
import socialIcons from "../constants/social-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const getPeli = graphql`query peliImage {
  peliImage: file(relativePath: {eq: "logos/peli_naranja.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`

const Footer = () => {
  const { peliImage } = useStaticQuery(getPeli)  
  return (
    <footer className={footer}>
      <div className={logo}>
      <GatsbyImage image={peliImage.childImageSharp.gatsbyImageData} alt="Peli" />
      </div>
      <div className={copyright}>
       apokapitalipsis {new Date().getFullYear()} 
      </div>        
      <div className={links}>
        {vinculos.map((item, index) => {
          return (
            <AniLink key={index} fade to={item.path}>
              {item.text}
            </AniLink>
          )
        })}
      </div>
      <div className={icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      <p  className={credito}>DISEÑADO POR PELI CON BASE EN SMILGA UTILIZANDO GATSBY + GRAPHCMS. GRACIAS.</p>
    </footer>
  );
}

export default Footer
