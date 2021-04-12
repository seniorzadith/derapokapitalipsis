import React from "react"
import { FaHtml5 } from "react-icons/fa";
import {resumen, resumenCenter, resumenInfo} from "../../css/resumen.module.css"
import Title from "../Title"

const Curriculum = () => {    
  return (
    <div className={resumen}>     
      <div className={resumenCenter}>
      <Title title="La" subtitle="Travesía" />         
        <article className={resumenInfo}>            
            <h5>Julio Zúñiga Valenzuela | Peli</h5>
            <div className="listado">           
            <p>
              Artista audiovisual
              (Director de cine y TV /Centro de Formación Profesional / ORTF / Paris, 1970)
            </p>
            </div>
            <h4>     
              Actividad Profesional
            </h4>  
            <h5>
              Chile | Empleado
            </h5>
            <div className="listado"> 
            <p>Director creativo de la Oficina de Relaciones Públicas del Ministerio de Educación (1965).</p>
            <p>Jefe del Departamento de Comunicaciones del Instituto de Desarrollo Agropecuario, INDAP (1965).</p>
            <p>Miembro del equipo de trabajo de Paulo Freire en el Programa Nacional de Alfabetización Campesina del INDAP (1965-1968).</p>
            <p> Productor de documentales de cine para el Canal 13 de Santiago de Chile (1970)</p>
            <p>Jefe del Departamento de Comunicaciones de la Consejería Nacional de Desarrollo Social (1971-1973)</p>
            <p>Jefe del Departamento de Comunicaciones de la Dirección General de Deportes del Estado, actual Ministerio del Deporte (1999).</p> 
            </div>
            <h5>
                Venezuela | Empleado
            </h5>
            <div className="listado">
            <p>Director creativo del Departamento de Producción de Materiales Educativos del Banco del Libro (1974-1976).</p>
            <p>Director de la consultoría de M&A Productores CA en producción de televisión en  la Gerencia de Desarrollo Humano de la Corporación Venezolana de Guayana. Tucupita, Delta Amacuro (1977).</p>
            <p>Asesor Técnico del Programa de Promoción y Capacitación de la Comunidad (PPCC) de la Gerencia de Desarrollo Humano de la Corporación Venezolana de Guayana. Ciudad Guayana, estado Bolívar (1978-1980).</p> 
            <p>Ilustrador y caricaturista editorial en El Diario de Caracas (1984-1988).</p>       
            <p>Ilustrador y caricaturista editorial en Economía Hoy. Caracas (1989-1999)</p>    
            <p>Caricaturista editorial en Ciudad CCS (2009-2015)</p>
            </div> 
            <h5>
                Venezuela | Free lance
            </h5>
            <div className="listado">  
            <p>Creación de ilustración editorial y humor gráfico para revistas Séptimo Día y Todo en Domingo de El Nacional; revista Élite; revista Nueva Sociedad; revista Número; revista Primicia; revista Imagen del CONAC y Reto del CONICIT.</p>    
            <p>Productor y director de TV para la producción independiente CIEP para VIVE TV Sala 404: Historias de niñ@s pacientes (2004-2007).</p> 
            <p>Diseño gráfico e ilustración de la Revista La Piñata editada por CIEP, para niñas y niños hospitalizados (2008-2012).</p>       
            <p>Ilustración de cuentos para niños y niñas: El Robo de las Aes, El Perro del Cerro y la Rana de la Sabana, Veintiséis Cuentos, Cuentos Picarescos de América Latina y Cándida, Editorial Ekaré;Fábula del Cambio de Rey, Editorial María Di Mase; Begoña la araña, para la Editorial Camelia; Doce cuentos, editorial El perro y la rana.(1984-2017)</p>    
            <p>Asesor comunicacional de MDC productores (2013-2016 )</p> 
            </div>  
            <h5>
                Exposiciones
            </h5>
            <div className="listado"> 
            <p>Colectiva de dibujo en el Ateneo de Caracas (1973).</p>    
            <p>Individual de dibujo en la Galería Viva México de Caracas (1974).</p>     
            <p>Individual de dibujo y pintura en la Galería Viva México de Caracas (1975).   </p>
            <p>Individual de dibujo y pintura en la Galería Viva México de Caracas (1976)</p>
            <p>Colectiva de dibujo y pintura El Paquete Erótico en la Galería Ocre de Caracas (1977). </p>
            <p>Colectiva de dibujo, grabado y pintura del grupo Confrontacción (1985).</p>  
            <p>Participación en el Salón Michelena con el Grupo Confrontacción (1985).</p>
            <p>Invitación a la I Bienal de Arte de La Habana con el grupo Confrontacción (1985).</p>    
            <p> Participación en I y II Salón del Humor Gráfico en la Galería de arte de la Alianza Francesa. Caracas (1986, 1987).</p>
            <p>Participación en el Salón de Ilustradores Infantiles de la CANTV. Caracas (1992, 1993).</p>
            <p>Colectiva de humor No es una exposición. Galería CELARG, Caracas (2004).</p>
            </div>
            <h5>
                Docencia
            </h5>
            <div className="listado"> 
            <p>Docente de dibujo e ilustración en diversos períodos académicos del instituto de diseño gráfico ProDiseño de Caracas (1991-1998).</p>
            </div> 
            <h5>
                Distinciones
            </h5>
            <div className="listado"> 
            <p>Padrino de promociones del Instituto ProDiseño de Caracas (1991 y 1998).</p>
            <p>Premio Pedro León Zapata al mejor caricaturista del año otorgado por el periódico El Nacional (1994).</p>
            <p>Condecoración Orden Mérito al Trabajo Francisco de Miranda de la República de Venezuela, segunda clase (1996). </p> 
            <p>Premio Municipal de Periodismo, mención caricatura, del Municipio Libertador de Caracas (1996).</p>
            <p>Premio Municipal de Periodismo, mención caricatura, del Municipio Libertador de Caracas (1997).</p>
            <p>Premio Aníbal Nazoa, mención caricatura, de la Fundación Periodismo Necesario (2010 y 2011).</p>
            </div> 
        </article>
      </div>
    </div>
  );
}

export default Curriculum