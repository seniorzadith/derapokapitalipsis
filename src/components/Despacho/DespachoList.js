import React from 'react'
import DespachoCard from "./DespachoCard"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import {despacho, center} from "../../css/despacho.module.css"

const getDespachos = graphql`
query{
    despachos: allGraphCmsDespacho(sort:{fields:publicado, order:DESC}){
      edges{
        node{
          slug
          encabezado
          id
          remoteId
          publicado
          bajada          
          caricaturaEditorial{            
              localFile{
              childImageSharp{
                fluid{
                    ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }        
      }
    }
}
`
const DespachoList = () => {
    const { despachos } = useStaticQuery(getDespachos)
    return (
        <section className={despacho}>
          <Title title="real" subtitle="politik" />
          <div className={center}>
            {despachos.edges.map(({ node }) => {
              return <DespachoCard key={node.id} despacho={node} />
            })}
          </div>
        </section>
      )
}

export default DespachoList
