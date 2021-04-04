import React from "react"
import BlogCard from "./BlogCard"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import {blog, center} from "../../css/blog.module.css"

const getPosts = graphql`
  query{
  posts: allGraphCmsBlog(sort:{fields:numeroPublicacion, order:DESC}){
    edges{
      node{
        titulo
        slug
        id
        numeroPublicacion
        remoteId  
        resumen
        imagenPortadaBlog{
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
const BlogList = () => {
  const { posts } = useStaticQuery(getPosts)

  return (
    <section className={blog}>
      <Title title="ideas" subtitle="para llevar" />
      <div className={center}>
        {posts.edges.map(({ node }) => {
          return <BlogCard key={node.id} blog={node} />
        })}
      </div>
    </section>
  )
}

export default BlogList
