import React from "react"
import Layout from "../conponents/Layout"
import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"
import slugify from "slugify"
import SEO from "../conponents/SEO"
export default function Tags({data}) {
  const newTags = setupTags(data.allContentfulRecipe.nodes)

  return (
  <Layout>
        <SEO title="Tags"/>
    <main className="page">
      <section className="tags-page">
        {newTags.map((tag,index)=>{
          const [text,value] = tag
          const slug = slugify(text,{lower:true})
          return(
            <Link key={index} to={`/tags/${slug}`} className="tag">
            <h5>{text}</h5>
            <p>{value} recipe</p>
            </Link>
          )
        })}
      </section>
    </main>
  </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`