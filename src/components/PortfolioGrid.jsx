import React from 'react';
import {Link} from "gatsby";
import Img from "gatsby-image";

import Grid from "@material-ui/core/Grid";
import "./PortfolioGrid.scss";


const PortfolioGrid = ({data}) => {
  return (
    <div className="wrapper">
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
    </div>
  )
};

export default PortfolioGrid;
