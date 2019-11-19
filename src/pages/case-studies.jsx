import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import GenericHero from "../components/GenericHero";

import "../assets/styles/_main.scss"
import Portfolio from "../components/Portfolio";

export default ({ data }) => {
  return (
    <Layout>
      <GenericHero sectionTitle="Case Studies"
                   title="We have stories to inspire you"
                   subtitle="Over the years, business have trusted us for the agility, neatness and the robustness we promise and deliver"
                   buttonTitle="Read ALL Stories"
      />
      <h2>Testimonials</h2>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <div key={index}>
          <h5>Testimonial for project: { node.frontmatter.title }</h5>
          <p>{ node.frontmatter.testimonial }</p>
        </div>
      ))}
      <Portfolio data={data}/>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          fields {
            slug
          }
          id
          html
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
            title
            testimonial
            date
          }
        }
      }
    }
  }
`;
