import React from 'react'
import Layout from '../conponents/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'
import RecipesList from '../conponents/RecipesList'
import SEO from '../conponents/SEO'

const About = ({data:{allContentfulRecipe:{nodes:recipes}}}) => {
  return (
    <Layout>
      <SEO title='about'/>
        <main className='page' description="this is about page">
          <section className="about-page">
            <article>
              <h2>I'm baby coloring book poke taxidermy</h2>
              <p>Taxidermy forage glossier letterpress heirloom before they sold out you probably haven't heard of them banh mi biodiesel chia.</p>
              <p>Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.</p>
              <Link className="btn" to="/contact">Contact</Link>
            </article>
              <StaticImage src="../asset/images/about.jpeg" alt="person" className="about-img" placeholder="blurred"/>
          </section>
          <section className="featured-recipes">
            <h5>Look at this Awesome Souce</h5>
            <RecipesList recipes={recipes}/>
          </section>
        
   
        </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        title
        cookTime
        prepTime
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`


export default About
