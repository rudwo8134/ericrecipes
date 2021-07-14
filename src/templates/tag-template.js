import React from 'react'
import Layout from '../conponents/Layout'
import { graphql } from 'gatsby'
import RecipesList from '../conponents/RecipesList'
import SEO from '../conponents/SEO'
const TagTemplate = ({data,pageContext}) => {
  const recipes = data.allContentfulRecipe.nodes
  const tag =pageContext.tag
  return (
    <Layout>
     <SEO title={tag}/>
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes}/>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
query GetRecipesByTag($tag:String) {
  allContentfulRecipe(
    sort: {fields: title, order: ASC}
    filter: {content: {tags: {eq:$tag }}}
  ) {
    nodes {
      title
      prepTime
      cookTime
      id
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
}

`

export default TagTemplate
