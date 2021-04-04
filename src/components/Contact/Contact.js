import React from "react"
import Title from "../Title"
import {contact, center, formControl, submit } from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={contact}>
      <Title title="contacta" subtitle="a Peli" />
      <div className={center}>
        <form action="https://formspree.io/xbjzwnyz" method="POST" className={formControl}>
          <div>
            <label htmlFor="name">nombre / seudónimo</label>  
            <input
              type="text"
              name="name"
              id="name"
              className={formControl}
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor="email">email</label>  
            <input
              type="email"
              name="email"
              id="email"
              className={formControl}
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor="message">mensaje</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className={formControl}
              placeholder=""
            />
          </div>
          <div>
            <input
              type="submit"
              value="enviar"
              className={submit}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
