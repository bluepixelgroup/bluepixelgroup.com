/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    typeformURL: 'https://bluepixel.typeform.com/to/PZrALr',
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-theme-material-ui",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/portofolio`,
        name: "portofolio",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images/portfolio`,
      },
    },
    "gatsby-transformer-remark",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    }
  ],
};
