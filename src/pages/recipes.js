import React from "react"
import Layout from "../conponents/Layout"
import AllRecipes from "../conponents/AllRecipes"
import SEO from "../conponents/SEO"
export default function Recipes() {
  return (
  <Layout>
        <SEO title="Recipes"/>
    <main className="page">
      <AllRecipes/>
    </main>
  </Layout>
  )
}
