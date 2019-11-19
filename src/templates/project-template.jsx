import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Container, Grid, Chip } from "@material-ui/core"

import "../assets/styles/_main.scss"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Container>
        <h1>{post.frontmatter.title}</h1>
        <Img
          fluid={post.frontmatter.coverImage.childImageSharp.fluid}
          alt={post.frontmatter.title}
        />
        <Grid container justify="space-between">
          <Grid item xs={12} md={6}>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Grid>
          <Grid item xs={12} md={5}>
            <Grid container direction="column">
              <Grid item>
                <p>Tags</p>
                {post.frontmatter.tags.map((tag, idx) => {
                  return <Chip label={tag} key={idx}></Chip>
                })}
              </Grid>
              <Grid item>
                <p>Tech</p>
                {post.frontmatter.tech.map((techName, idx) => {
                  return <Chip label={techName} key={idx}></Chip>
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        tech
        coverImage {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
