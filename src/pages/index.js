import React from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import BannerHero from "../components/BannerHero"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import FeaturedPreprojects from "../components/Home/FeaturedPreprojects"

const Index = () => (
  <Layout>    
    <SimpleHero>
      <BannerHero
        title="Apo"
        title2="Kapital"
        title3="ipsis"
        title4="2021"
        info=" DIBUJOS | CALIGRAFÍAS | VOLÚMENES"
      >
        <AniLink fade to="/peste" className="btn-white">
          Tema: la peste
        </AniLink>
      </BannerHero>
    </SimpleHero>    
    <About/>    
    <Services/>
    <FeaturedPreprojects/>
  </Layout>
)

export default Index;