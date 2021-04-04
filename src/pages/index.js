import React from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import BannerHero from "../components/BannerHero"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import FeaturedPreprojects from "../components/Home/FeaturedPreprojects"
import Seo from "../components/SEO"


const Index = () => (
  <Layout>
    <Seo title="home" description="Creando arte multimedia alquímico y político en medio de la debacle pandémica, telúrica, económica y cultural" />
    <SimpleHero>
      <BannerHero
        title="Apo"
        title2="Kapital"
        title3="ipsis"
        info=" DIBUJOS | CALIGRAFÍAS | VOLÚMENES"
      >
        <AniLink fade to="/peste" className="btn-white">
          la peste
        </AniLink>
      </BannerHero>
    </SimpleHero>    
    <About/>    
    <Services/>
    <FeaturedPreprojects/>
  </Layout>
)

export default Index;