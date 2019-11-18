import React from "react"

import Layout from "../components/Layout"
import Hero from "../components/Hero"

import "../assets/styles/_main.scss"

export default ({ data }) => {
  return (
    <Layout>
      <Hero />
      <h2>Testimonials</h2>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <div key={index}>
          <h5>Testimonial for project: { node.frontmatter.title }</h5>
          <p>{ node.frontmatter.testimonial }</p>
        </div>
      ))}
      <h2>Projects</h2>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <div key={index}>
          <h5>Project: { node.frontmatter.title }</h5>
          <p>{ node.html }</p>
        </div>
      ))}
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            title
            testimonial
            date
          }
        }
      }
    }
  }
`
