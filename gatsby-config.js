/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  /* Your site config here */
  siteMetadata:{
  title:  'Simply Recipes',
  description:'Nice and clean recipes site',
  author:"@eric.shin",
  person:{
    name:"eric shin",
    age:"28"
  },
  simpleData:['item1', 'item2'],
  complexData:[
    {
    name:"eric shin",
    age:"28"
  },
  {
    name:"jane",
    age:"22"
  }

  ]
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/asset/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `swuu8dap9m5i`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
    resolve: `gatsby-plugin-webfonts`,
    options: {
      fonts: {
        google: [
          {
            family: "Montserrat",
            variants: ["400"],
          },
          {
            family: "Inconsolata",
            variants: ["400","500","600", "700"],
          },
        ],
      },
    },
  },
  `gatsby-plugin-react-helmet`,
  ],
}
