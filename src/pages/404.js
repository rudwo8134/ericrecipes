import React from "react"
import Layout from "../conponents/Layout"
import SEO from "../conponents/SEO"
export default function Error() {
  return (
  <Layout>
    <SEO title="Error"/>
    <main className='error-page'>
      <section>
        <h1>404</h1>
        <h3>Page not found</h3>
      </section>
    </main>
  </Layout>
  )
}
