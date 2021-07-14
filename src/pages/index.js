import React from "react"
import Layout from "../conponents/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../conponents/AllRecipes"
import SEO from "../conponents/SEO"
export default function Home() {
  return (
  <Layout>
    <SEO title="home page"/>
    <main className="page">
      <header className="hero">
          <StaticImage
            src="../asset/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
    <div className="hero-container">
      <div className="hero-text">
        <h1>simply recipes</h1>
        <h4>no fluff, just recipes</h4>
      </div>
    </div>
    </header>
        <AllRecipes />
    </main>
  </Layout>
  )
}
