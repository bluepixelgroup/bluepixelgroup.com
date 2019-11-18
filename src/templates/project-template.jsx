import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Container } from "@material-ui/core"

import '../assets/styles/_main.scss';


export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Container>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
    }
  }
`
