import React from "react"
import Title from "../Title"
import {frases, center, frase} from "../../css/frases.module.css"
import alternativas from "../../constants/frases"

const Alternativas = () => {
  return (
    <section className={frases}>
      <Title title="a" subtitle="vuelapluma" />
      <div className={center}>
        {alternativas.map((item, index) => {
          return (
            <article key={index} className={frase}>                            
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Alternativas