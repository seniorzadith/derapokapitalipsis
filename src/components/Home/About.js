import React from "react"
import Title from "../Title"
import {about, aboutCenter, aboutImg, imgContainer, aboutInfo} from "../../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const getAbout = graphql`query aboutImage {
  aboutImage: file(relativePath: {eq: "gente/peli_repollo.png"}) {
    childImageSharp {
      gatsbyImageData(width: 600, placeholder: TRACED_SVG, layout: CONSTRAINED)
    }
  }
}`

const About = () => {
    const { aboutImage } = useStaticQuery(getAbout)  
  return (
    <section className={about}>
      <Title title="larga" subtitle="marcha" />
      <div className={aboutCenter}>
        <article className={aboutImg}>
          <div className={imgContainer}>
          <GatsbyImage image={aboutImage.childImageSharp.gatsbyImageData} alt="Pelinski" />
          </div>
        </article>
        <article className={aboutInfo}>
          <h3>La vuelta al mundo en ochenta años</h3>
          <h4>1950 / 1973</h4>
          <p>
            Dibujé historietas a lápiz en esos cuadernos de ciencias inencontrables ahora, la mitad de arriba en blanco y la de abajo con líneas, sobre una pequeña mesa de mármol en la galería del patio de acceso al antiquísimo hospedaje familiar, el Hotel Robles de San Felipe El Real. Entre las puertas de acceso a las habitaciones había unos frescos pintados por un artista italiano que fue a decorar el Teatro Municipal y pagó la cuenta de sus francachelas desorbitadas con escenas tipo Embarque para Citerea, de Watteau, enmarcadas en grecas: ruinas griegas y galeones majestuosos a punto de hacerse a la mar. La señora Ana me servía puntualmente café con leche y una hallulla con mantequilla a la hora de onces. Luego todo fue vertiginoso. 
            </p>
            <p>
            Mudanza a Santiago; nueve años en el Instituto Nacional; otros años deambulando por las escuelas de Geología, Arquitectura y Artes Aplicadas; mis primeros trabajos como diseñador, ilustrador, diagramador y caricaturista editorial; matrimonio y tres hijos formidables, ahora demasiado lejos; la providencial llegada de Paulo Freire a INDAP, abriendo para siempre mi mente a la política y la pedagogía de la liberación, como parte de su equipo; tiempo-espacio en París estudiando dirección de cine y televisión y luego la vorágine mayor de los 1.000 días de la Unidad Popular, creando y dirigiendo proyectos comunicacionales para la cultura popular hasta el zarpazo castrense y el avión militar venezolano Hércules iluminado a la distancia en la pista del antiguo aeropuerto de Cerrillos, mientras nos enviaban de a uno en fondo flanqueados por una doble fila de soldados que amartillaban una y otra vez sus rifles, invisibles en la oscuridad total.
          </p>
          <h4>1974 / 2018</h4>
          <p>
            Cuatro décadas de exilio en Venezuela. Trabajé con el inolvidable Mariano Díaz, diseñador y fotógrafo superior, chileno que llegó en algún año con Jodorowsky y Hernán Peralta explorando el mundo y se quedó allí para siempre; ahora el mismo Peralta regresaba conmigo. Creé y expuse dibujos  y pasteles en la galería Viva México del también inolvidable Jorge De Godoy y en salones ad hoc; compré y devoré <em>El Misterio de las Catedrales</em> de Fulcanelli en la Librería Francesa de Caracas. Leí y releí un millón de veces al filósofo y literato Zhuang Zi editado por Monte Ávila y a su compatriota Calabaza Amarga desplegando en <em>Palabras sobre pintura</em> su extraordinaria tesis de la pincelada única. Viví en el Delta del Orinoco y Ciudad Guayana creando y supervisando proyectos que continuaban la saga freiriana e hice mi experiencia campesina en medio de la pobreza rural de Pozo Verde, con vecinos que entrenaban sus gallos de pelea en un losa circular dentro de mi propiedad y niños desnutridos bañándose en un arroyo cercano.
            </p>
            <p>De regreso en Caracas ilustré muchos libros infantiles y durante 30 años creé ilustración y caricatura editorial para revistas, periódicos y otros impresos, mientras seguía empeñado en investigar más alquimia con una pequeña colección de tratados ya formada y también estudiaba más a fondo al Maestro Zhuang, exégeta extraordinario de Lao Zi y crítico acerbo de Confucio (Zhuang Zi = Chuang Tzu). Amé y reconocí a Taroa como mi hija, luego a sus hijas como mis nietas y fui docente en ProDiseño.
            </p>
            <p> 
            Conocí a Lilian Maa´Dhoor y Tito paseando por los anillos de Saturno, ambos con una lata de té Earl Grey en el bolsillo y nos hicimos pareja para siempre en el amor, en el respeto, en la igualdad; me hice venezolano y me embarqué una vez más en un nuevo intento inexorablemente inviable de socialismo en un solo país, creando con Lilian proyectos comunicacionales multimedia para niños hospitalizados. Luego aprendimos a sembrar y cosechar un conuco con Rubén Laya, sabio popular heredero de conocimientos ancestrales, en un remanso natural sobreviviendo entre colosales bloques de apartamentos populares y una autopista.
          </p>
          <p> 
            Ya en pleno reflujo revolucionario hacia la inevitable dictadura actual creé humor gráfico para un  militante periódico caraqueño y luego, sospechoso de contrarrevolucionario, fui expulsado por correveidiles de la nomenklatura entre gallos y medianoche; regresé a la televisión gracias a Carlos y César Márquez y opiné  por redes sociales hasta que un avión comercial nos trajo a comienzos de 2019 a Santiago de la Nueva Extremadura.
          </p>
          <h4>2019 / 2021</h4>
          <p>
            Otra vez el espacio-tiempo acelerado y peligrosamente curvo. Puerto Montt en autobús para un festival de lambe lambe de Lilian y luego meses por Francia, Portugal y Suiza, celebrando con amigos de siempre y parientes generosos 20 años de amorosa convivencia. Ahora, aquí y ahora, Santiago de la Nueva Extremadura, en Ñuñoa con Lilian, entre los vaivenes de la pandemia interminable, remezones telúricos, cerca de mis hermanos Pati y Marco, con amigos generosos. ¿Qué? Todo por hacerse nuevamente. Porque si no ahora ¿cuándo?</p>
          <button type="button" className="btn-primary">
            eventualmente más detalles
          </button>
        </article>
      </div>
    </section>
  );
}

export default About