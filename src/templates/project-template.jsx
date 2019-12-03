import React from "react";
import { Container, Grid, Chip } from "@material-ui/core";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import TestimonialCard from "../components/common/TestimonialCard";
import SEO from "../components/common/SEO";

import CalendarIcon from "../assets/images/calendaricon.inline.svg"
import TeamIcon from "../assets/images/teamicon.inline.svg"
import LinkIcon from "../assets/images/linkicon.inline.svg"

import "./project-template.scss"
import Media from "../components/Media";


const TagList = (props) => {
  const { title, tags } = props;
  return (
    <React.Fragment>
      <div className="section-title">{title}</div>
      <Grid container spacing={1}>
        {tags.map((tag, idx) => {
          return (
            <Grid item key={idx}>
              <Chip label={tag} />
            </Grid>
          )
        })}
      </Grid>
    </React.Fragment>
  )
};

const StatList = (props) => {
  const { developmentDuration, teamSize } = props;
  return (
    <React.Fragment>
      <div className="section-title">Stats</div>
      <Grid container spacing={2} direction="column">
        <Grid item className="stat-item">
          <div className="svg-container"><CalendarIcon/></div>
          {developmentDuration}
        </Grid>
        <Grid item className="stat-item">
          <div className="svg-container"><TeamIcon/></div>
          {teamSize}
        </Grid>
      </Grid>
    </React.Fragment>
  )
};

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <SEO
        title={`${post.frontmatter.title} | Blue Pixel`}
        pathname={post.fields.slug}
        description={post.excerpt}
        image={post.frontmatter.coverImage.publicURL}
        article={true}
      />
      <Container className="project-template-container">
        <p className="page-category">CASE STUDIES</p>
        <h1 className="case-study-title">{post.frontmatter.title}</h1>
        <Img
          className="case-study-cover-image"
          fluid={post.frontmatter.coverImage.childImageSharp.fluid}
          alt={post.frontmatter.title}
        />
        <Grid container justify="space-between">
          <Grid item xs={12} md={7} lg={8}>
            <article dangerouslySetInnerHTML={{ __html: post.html }} />
            {
              post.frontmatter.testimonial &&
              <section className="testimonial">
                <Grid
                  container
                  direction="column"
                  justify="flex-end"
                  alignItems="flex-end"
                >
                  <Grid item xs>
                    <h2>Check what our client said:</h2>
                    <TestimonialCard
                      testimonial={post.frontmatter.testimonial}
                      author={post.frontmatter.author}
                      style={{maxWidth: 416}}
                    />
                  </Grid>
                </Grid>
              </section>
            }
            <Media projectName={post.frontmatter.title} data={post.frontmatter.media || []}/>
          </Grid>
          <Grid item xs={12} md={4} lg={3} container direction="column" spacing={5}>
            <Grid item>
              <TagList title="Tags" tags={post.frontmatter.tags} />
            </Grid>
            <Grid item>
              <TagList title="Tech" tags={post.frontmatter.tech} />
            </Grid>
            <Grid item>
              <StatList developmentDuration={`${post.frontmatter.stats.weeks} weeks`} teamSize={`${post.frontmatter.stats.persons} persons`} />
            </Grid>
            { post.frontmatter.projectLink &&
              <Grid item>
                <a
                  className="project-link stat-item"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={post.frontmatter.projectLink}
                >
                  View project &nbsp;&nbsp;&nbsp;<LinkIcon/>
                </a>
              </Grid>
            }
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
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        tags
        tech
        stats {
          weeks
          persons
        }
        projectLink
        coverImage {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        media {
          publicURL
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
`;
