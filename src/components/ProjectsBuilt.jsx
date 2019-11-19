import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import {Link} from "gatsby";
import Container from "@material-ui/core/Container";
import {Button} from "@material-ui/core";

import Section from "../components/Section";
import Separator from "./Separator";

import PortfolioGrid from "./PortfolioGrid";
import "./ProjectsBuilt.scss";


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
        <Container>
          <PortfolioGrid data={data}/>
          <div className="see-more-wrapper">
            <Button component={Link} to="/case-studies" variant="outlined" color="primary" size="large">
              SEE MORE PROJECTS
            </Button>
          </div>
        </Container>
      </Section>
    </React.Fragment>
  )
};

export default ProjectsBuilt;
