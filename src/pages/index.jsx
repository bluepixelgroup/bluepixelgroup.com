import React from "react"
import {graphql} from "gatsby";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Technology from "../components/Technology";
import Portfolio from "../components/Portfolio";
import OneStop from "../components/OneStop";
import Team from "../components/Team";
import SEO from "../components/common/SEO";

import '../assets/styles/style.scss';


export default ({data}) => {
  return (
    <Layout>
      <SEO/>
      <Hero typeformURL={data.site.siteMetadata.typeformURL} />
      <Technology />
      <Portfolio data={data} seeMoreButton={true}/>
      <OneStop typeformURL={data.site.siteMetadata.typeformURL} />
      <Team />
    </Layout>
  )
}

export const query = graphql`
    query {
      site {
        siteMetadata {
          typeformURL
        }
      }
      allMarkdownRemark(
      filter: {frontmatter: {featured: {eq: true}}}, limit: 3, sort: {order: DESC, fields: frontmatter___date}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              projectName
              projectShortDescription
            }
          }
        }
      }
    }
  `;
