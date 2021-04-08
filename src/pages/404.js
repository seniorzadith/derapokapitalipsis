import React from "react"
import Layout from "../components/Layout"
import {error} from '../css/error.module.css'
import Banner from "../components/Banner"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default function Error() {
  return (
    <Layout>
     
      <header className={error}>
        <Banner title="ruta sin destino">
          <AniLink fade to="/" className="btn-white">
            regreso a inicio
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}
