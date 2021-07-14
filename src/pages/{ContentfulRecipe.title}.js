import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {BsClockHistory, BsClock, BsPeople} from 'react-icons/bs'
import { Link } from 'gatsby'
import Layout from '../conponents/Layout'
import slugify from 'slugify'
import SEO from '../conponents/SEO'
const RecipeTemplate = ({data}) => {
  const{title,image,cookTime,content,prepTime, servings, description:{description}}=data.contentfulRecipe
  const pathToImage= getImage(image)
  const {tags, instructions,ingredients,tools} = content

  return (
    <Layout>
    <SEO title={title} description={description}/>
    <main className="page">
      <div className="recipe-page">
        <section className="recipe-hero">
          <GatsbyImage image={pathToImage} alt={title} className="about-img"/>
          <article className="recipe-info">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="recipe-icons">
            <article>
              <BsClock/>
              <h5>prep time</h5>
              <p>{prepTime} min.</p>
            </article>
              <article>
              <BsClockHistory/>
              <h5>cook time</h5>
              <p>{cookTime} min.</p>
            </article>
              <article>
              <BsPeople/>
              <h5>Serving</h5>
              <p>{servings} peope</p>
            </article>
            </div>
            <p className="recipe-tags">
              Tags: 
              {tags.map((tag,index)=>{
              const slug = slugify(tag,{lower:true})
              return(
              <Link to={`/tags/${slug}`} key={index}>{tag}</Link>
              )
              }
              )}
            </p>
          </article>
        </section>
        <section className="recipe-content">
          <article>
            <h4>instructions</h4>
            {
              instructions.map((item,index)=>{
                return(
                  <div key={index} className="single-instruction">
                    <header>
                      <p>step {index+1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                )
              })
            }
          </article>
          <article className="second-column">
            <div>
              <h4>ingredients</h4>
              {ingredients.map((item,index)=>{
                return(
                  <p key={index} className="single-ingredient">
                    {item}
                  </p>
                )
              })}
            </div>
               <div>
              <h4>tools</h4>
              {tools.map((item,index)=>{
                return(
                  <p key={index} className="single-tool">
                    {item}
                  </p>
                )
              })}
            </div>
          </article>
        </section>
      </div>
    </main>
    </Layout>

  )
}

export const query = graphql`
query getSingleRecipe($title: String) {
  contentfulRecipe(title: {eq: $title}) {
    title
    cookTime
    servings
    prepTime
    content {
      ingredients
      instructions
      tags
      tools
    }
    description {
      description
    }
    image {
      gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
    }
  }
}


`



export default RecipeTemplate
