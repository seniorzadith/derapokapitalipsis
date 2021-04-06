import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Preprojects from "../components/Preprojects/Preprojects"
import Seo from "../components/SEO"

export default class preprojects extends Component {
  render() {
    return (
      <Layout>
        <Seo title="Projects" />
        <StyledHero img ={this.props.data.defaultProjects.childImageSharp.fluid} />
        <Preprojects/>
      </Layout>
    );
  }
}

export const query = graphql`{
  defaultProjects: file(relativePath: {eq: "banner/defaultProjects.png"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
    }
  }
}
`
