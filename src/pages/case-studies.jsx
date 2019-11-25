import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import GenericHero from "../components/GenericHero";
import Testimonials from "../components/Testimonials";
import Portfolio from "../components/Portfolio";

import '../assets/styles/style.scss';


export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>We have stories to inspire you | Blue Pixel</title>
        <link rel="canonical" href="https://bluepixelgroup.com/case-studies" />
      </Helmet>
      <GenericHero
        sectionTitle="Case Studies"
        title="We have stories to inspire you"
        subtitle="Over the years, business have trusted us for the agility, neatness and the robustness we promise and deliver"
        buttonTitle="Read ALL Stories"
      />
      <Testimonials data={data} />
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
            date
            testimonial
            author {
              name
              company
              role
              image {
                publicURL
              }
            }
          }
        }
      }
    }
  }
`;
