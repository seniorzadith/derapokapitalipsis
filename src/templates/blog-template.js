import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import {blog, center, image} from "../css/singleblog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import StyledHero from "../components/StyledHero"
import { GatsbyImage } from "gatsby-plugin-image";
//import { GatsbyImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Blog = ({ data }) => {
  const {
    titulo,
    subtitulo,    
    resumen,
    imagenPortadaBlog,
    imagenPrefacioBlog,
    prefacio,
    imagenCorpusBlog,
    corpus,
    imagenEpilogoBlog,
    epilogo,
    
  } = data.post

  return (
    <Layout>
      <StyledHero img={imagenPortadaBlog.localFile.childImageSharp.gatsbyImageData} />
      <section className={blog}>
        <div className={center}>
          <h1 className="titulo">{titulo}</h1>
          <h3 className="italica"><em>{subtitulo}</em></h3>          
          <p>{resumen}</p>
          <div>
            <GatsbyImage
              image={imagenPrefacioBlog.localFile.childImageSharp.gatsbyImageData}
              alt="Caligrafía 1"
              className={image} />
          </div>
          <MDXRenderer>
             {prefacio.markdownNode.childMdx.body}
          </MDXRenderer>
          <div>
            <GatsbyImage
              image={imagenCorpusBlog.localFile.childImageSharp.gatsbyImageData}
              alt="Caligrafía 2"
              className={image} />
          </div>
          <MDXRenderer>
             {corpus.markdownNode.childMdx.body}
          </MDXRenderer>
          <div>
             <GatsbyImage
               image={imagenEpilogoBlog.localFile.childImageSharp.gatsbyImageData}
               alt="Caligrafía 3"
               className={image} />
          </div>
          <MDXRenderer>
              {epilogo.markdownNode.childMdx.body}
          </MDXRenderer>
          <AniLink fade to="/blog" className="btn-primary">
            más quipus
          </AniLink>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`query getPost($slug: String!) {
  post: graphCmsBlog(slug: {eq: $slug}) {
    titulo
    resumen
    numeroPublicacion
    imagenPortadaBlog {
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        }
      }
    }
    subtitulo
    imagenPrefacioBlog {
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        }
      }
    }
    prefacio {
      markdownNode {
        childMdx {
          body
        }
      }
    }
    imagenCorpusBlog {
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        }
      }
    }
    corpus {
      markdownNode {
        childMdx {
          body
        }
      }
    }
    imagenEpilogoBlog {
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        }
      }
    }
    epilogo {
      markdownNode {
        childMdx {
          body
        }
      }
    }
  }
}
`

export default Blog

