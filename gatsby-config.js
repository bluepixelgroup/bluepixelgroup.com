/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    typeformURL: 'https://bluepixel.typeform.com/to/PZrALr',
    siteUrl: "https://bluepixelgroup.com",
    title: "Blue Pixel - The fastest and most convenient way to deliver your software.",
    description: "We are committed to meeting the expectations of our customers. We achieve this by mixing technology and innovation to deliver the best experience.",
    image: "/default_meta_image.jpg", // Path to your image you placed in the 'static' folder
    // twitterUsername: "@occlumency",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-theme-material-ui",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/case-studies`,
        name: "case-studies",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images/case-studies`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-60048784-3",
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
};
