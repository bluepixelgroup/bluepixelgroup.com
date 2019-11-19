import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Container, Grid, Chip } from "@material-ui/core"

import "./project-template.scss"

const TagList = (props) => {
  const { title, tags } = props;
  return (
    <React.Fragment>
      <div className="section-title">{title}</div>
      <Grid container spacing={1}>
        {tags.map((tag, idx) => {
          return (
            <Grid item key={idx}>
              <Chip label={tag}></Chip>
            </Grid>
          )
        })}
      </Grid>
    </React.Fragment>
  )
}

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Container className="project-template-container">
        <p className="page-category">CASE STUDIES</p>
        <h1 className="case-study-title">{post.frontmatter.title}</h1>
        <Img
          className="case-study-cover-image"
          fluid={post.frontmatter.coverImage.childImageSharp.fluid}
          alt={post.frontmatter.title}
        />
        <Grid container justify="space-between">
          <Grid item xs={12} md={6} className="case-study-article">
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Grid>
          <Grid item xs={12} md={5} container direction="column" spacing={5}>
            <Grid item>
              <TagList title="Tags" tags={post.frontmatter.tags} />
            </Grid>
            <Grid item>
              <TagList title="Tech" tags={post.frontmatter.tech} />
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
