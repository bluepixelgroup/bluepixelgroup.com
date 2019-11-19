import React from "react"

import {graphql} from "gatsby";

import Layout from "../components/Layout"
import Hero from "../components/Hero";
import Technology from "../components/Technology";
import Portfolio from "../components/Portfolio";
import OneStop from "../components/OneStop";
import Team from "../components/Team";

import '../assets/styles/_main.scss';


export default ({data}) => {
  return (
    <Layout>
      <Hero/>
      <Technology />
      <Portfolio data={data} seeMoreButton={true}/>
      <OneStop />
      <Team />
    </Layout>
  )
}

export const query = graphql`
    query {
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
