import React from 'react';
import {useStaticQuery, graphql, Link} from "gatsby";
import Img from "gatsby-image";
import Container from "@material-ui/core/Container";

import Section from "../components/Section";
import Separator from "./Separator";

import "./ProjectsBuilt.scss";
import Grid from "@material-ui/core/Grid";


const ProjectsBuilt = () => {
  const data = useStaticQuery(graphql`
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
  `);

  return (
    <React.Fragment>
      <Separator/>
      <Section
        title="Projects built by us"
        subtitle="State-of-the-art lorem ipsum ot grow your business. JavaScript class that can be used to quickly create animations that display numerical."
        className="projects-built"
      >
        <div className="wrapper">
          <Container>
            <Grid container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className="portfolio">
              {data.allMarkdownRemark.edges.map(({node}, index) => (
                <Grid alignItems="center" item xs={12} md={3} key={index}>
                  <div className="portfolio-item">
                    <div className="preview">
                      <Link
                        to={node.fields.slug}>
                        <Img
                          fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                          alt={node.frontmatter.projectName}/>
                      </Link>
                    </div>
                    <div className="title"><Link
                      to={node.fields.slug}>{node.frontmatter.projectName}</Link>
                    </div>
                    <p>{node.frontmatter.projectShortDescription}</p>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </Section>
    </React.Fragment>
  )
};

export default ProjectsBuilt;
