import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'


const Image = () => {
  return (
    <Wrapper>
      <article>
            <h3>constrained/default</h3>
            <StaticImage src='../asset/images/recipe-1.jpeg' alt='food' placeholder="tracedSVG" layout="constrained" className="example-img" as="section" />
      </article>
      <article>
            <h3>fixed</h3>
      <StaticImage src='../asset/images/recipe-1.jpeg' alt='food' placeholder="blurred" layout="fixed" className="example-img" as="section" />
      </article>
      <article>
            <h3>fullwidth</h3>
            <StaticImage src='../asset/images/recipe-1.jpeg' alt='food' placeholder="dominantColor" layout="fullWidth" className="example-img" as="section" />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align:center;
  gap:2rem;
  article{
    border: 2px solid red;
  }
  .example-img{
    border-radius: 30px;
    height: 300px;
  }
  @media (min-width:992px){
    grid-template-columns: 1fr 1fr 1fr;
    .example-img{
      height: 300px;
    }
  }
  `

export default Image
