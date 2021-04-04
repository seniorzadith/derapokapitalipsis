import React from "react"
import Title from "../Title"
import {services, service, center} from "../../css/services.module.css"
import prestaciones from "../../constants/prestaciones"

const Servicios = () => {
  return (
    <section className={services}>
      <Title title="en" subtitle="concreto" />
      <div className={center}>
        {prestaciones.map((item, index) => {
          return (
            <article key={index} className={service}>
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Servicios