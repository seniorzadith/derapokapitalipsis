import React from "react"
import {peste, pesteCenter,  pesteInfo, imgContainer, pesteImg} from "../../css/lapeste.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Title from "../Title"

const getPeste = graphql`
  query pesteImg {
    pesteImage: file(relativePath: { eq: "lapeste/camus_001.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Lapeste = () => {
    const { pesteImage } = useStaticQuery(getPeste)  
  return (
    <div className={peste}>     
      <div className={pesteCenter}>
      <Title title="la" subtitle="peste" />         
        <article className={pesteInfo}>            
            <h4> Planeta Oran</h4>          
            <p>
              Albert Camus, filósofo, periodista y escritor francés nacido en Argelia, publicó su novela <em>La peste</em> en 1947, apenas un par de años después del fin de la II Guerra Mundial. Tal vez el espantoso conflicto fue inspiración para la metáfora que despliega, aunque a la vista de la pandemia que nos azota es una verdadera profecía. En Oran, ciudad argelina, aparece una brutal peste incurable que obliga a declarar la cuarentena total: nadie puede entrar ni salir. Al filo de la infección y la inexorable muerte, sus habitantes se ven obligados a reiventar tanto su vínculo con el mundo cuanto sus relaciones sociales cotidianas.</p> 
              
            <p>
              Mediante una galería emblemática de personajes, Camus recorre nuestras conductas humanas, demasiado humanas. Roux, médico, que frente a la catástrofe muestra lo mejor de nosotros: compromiso, compasión y solidaridad; Tarrou, intelectual pacifista recopilador compulsivo de información sin destino; Paneloux, sacerdote intolerante que ve la peste como castigo divino merecido por nuestros pecados; Rambert, periodista parisino atrapado inesperadamente en Oran que se incorpora a la lucha contra los terribles efectos de la infección; Cottard, perseguido por la justicia incapaz de ver el sufrimiento de otros; Othón, juez de instrucción, perderá su hijo infectado por la peste y Grand, solitario empleado, que espera tener un gran éxito editorial con una novela que tiene entre manos. Grand es la base de esta propuesta.</p>
            <p>
              Monsieur Grand tiene en mente un proyecto de novela perfecta. Tan perfecta, que no ha conseguido resolver a su entera satisfacción la primera frase para expresar exactamente la escena que ve en su mente. Cada palabra vale. En medio de la debacle pestífera cotidiana invita al doctor Roux a su casa, repleta de hojas con variantes de la decisiva primera oración. Con manos temblorosas toma la última versión y lee:</p>
        </article>

          <article className={pesteImg}>
          <div className={imgContainer}>
          <Img
              fluid={pesteImage.childImageSharp.fluid}
              alt="Pelinski"
            />
          </div>
          </article>
          <article className={pesteInfo}>
          <p className="parrafo">
              <em>Me he propuesto continuar el empeño de Grand, considerando que 73 años después los seres humanos no hemos cambiado radicalmente y que la pandemia planetaria que nos agobia reproduce el contexto de su esfuerzo literario en cuarentena. ¿Quién quita que por fin logre las palabras y la sintaxis exacta que obligue a los editores de hoy a sacarse el sombrero? Es mi manera de homenajear el genio de Albert Camus y recomendarte que busques y leas <strong>La peste</strong>. Te sacarás el sombrero, nunca el barbijo y puede que te surja una frase Grand antes que lluevan vacunas. Envíamela y la añado.</em>
              </p>    
         </article>        
      </div>
    </div>
  )
}

export default Lapeste