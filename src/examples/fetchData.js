import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
  query first{
  site {
    info:siteMetadata {
      author
      description
      simpleData
      title
      person {
        age
        name
      }
      complexData {
        age
        name
      }
    }
    buildTime
  }
}
`
const Fetchdata = () => {
  const {site:{info:{author,description,title}}} = useStaticQuery(getData)
  return (
    <div>
      <h3>{title}</h3>
      <h3>{author}</h3>
    </div>
  )
}

export default Fetchdata
